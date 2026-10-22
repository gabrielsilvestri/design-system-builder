/* Turquesa Dither: motion. Bayer 4x4 em 3 tons, desenhado em canvas pequeno e ampliado sem suavizar.
   Incluir no fim do <body>. Os três efeitos ligam sozinhos pelo markup:
   1. .heroart com data-front="<png sem esfera>": esfera com a luz girando (data-w, data-h, data-cx, data-cy, data-r em pixels lógicos)
   2. .band.dl / .band.ld: borda do dither ondulando
   3. [data-dither-in] ou os seletores em window.DITHER_IN: o bloco entra dissolvendo (fundo, teal, aparece)
   Com prefers-reduced-motion tudo fica parado (a esfera desenha um quadro só). */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var PAL = [[16,18,22],[58,140,133],[214,243,239]];
  var B = [0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5].map(function(v){return (v+.5)/16});
  function lvl(t,x,y){ t = t<0?0:t>1?1:t; var v=t*2, f=Math.floor(v); return Math.min(f + ((v-f) > B[(y&3)*4+(x&3)] ? 1 : 0), 2); }
  function put(d,i,l,a){ var c=PAL[l]; d[i]=c[0]; d[i+1]=c[1]; d[i+2]=c[2]; d[i+3]=a; }
  function visible(el){ var on=false; new IntersectionObserver(function(es){ on = es[0].isIntersecting; }).observe(el); return function(){return on}; }
  function loop(on, ms, draw){ var last=0; (function f(t){ if (on() && t-last > ms) { draw(t); last = t; } requestAnimationFrame(f); })(0); }

  /* 1. esfera viva */
  document.querySelectorAll('.heroart[data-front]').forEach(function(art){
    var ds = art.dataset, W = +ds.w || 240, H = +ds.h || 300, cx = +ds.cx || 150, cy = +ds.cy || 118, r = +ds.r || 92;
    var img = art.querySelector('img'), cv = document.createElement('canvas');
    cv.width = W; cv.height = H; cv.className = 'sphere'; cv.setAttribute('aria-hidden','true');
    art.insertBefore(cv, img); img.src = ds.front;
    var ctx = cv.getContext('2d'), id = ctx.createImageData(W,H), d = id.data;
    function sphere(time){
      var a = time*0.00035, lx = Math.cos(a)*0.62, ly = -0.55 + Math.sin(a)*0.2, lz = 0.6, n = Math.hypot(lx,ly,lz);
      lx/=n; ly/=n; lz/=n;
      for (var y=0; y<H; y++) for (var x=0; x<W; x++) {
        var i=(y*W+x)*4, dx=(x-cx)/r, dy=(y-cy)/r, q=dx*dx+dy*dy;
        if (q>1) { d[i+3]=0; continue; }
        var s = dx*lx + dy*ly + Math.sqrt(1-q)*lz;
        put(d,i,lvl(0.08 + 0.9*Math.pow(s<0?0:s,1.3), x, y),255);
      }
      ctx.putImageData(id,0,0);
    }
    sphere(0);
    if (!reduce) loop(visible(art), 70, sphere);
  });

  /* 2. faixas ondulando */
  if (!reduce) document.querySelectorAll('.band').forEach(function(band){
    var dl = band.classList.contains('dl'), cv = document.createElement('canvas'), ctx = cv.getContext('2d'), H = 24, W, id;
    band.appendChild(cv);
    function size(){ W = Math.ceil(band.clientWidth/4); cv.width = W; cv.height = H; id = ctx.createImageData(W,H); }
    size(); window.addEventListener('resize', function(){ size(); draw(performance.now()); });
    function draw(t){
      var d = id.data, k = t*0.001;
      for (var x=0; x<W; x++) {
        var w = 0.13*Math.sin(x*0.045 + k*0.9) + 0.07*Math.sin(x*0.11 - k*1.4);
        for (var y=0; y<H; y++) { var p = y/(H-1) + w; put(d,(y*W+x)*4,lvl(dl ? p : 1-p, x, y),255); }
      }
      ctx.putImageData(id,0,0);
    }
    draw(0); band.classList.add('live');
    loop(visible(band), 80, draw);
  });

  /* 3. dissolve de entrada */
  if (!reduce && 'IntersectionObserver' in window) {
    var CELL = 8, sel = '[data-dither-in]' + (window.DITHER_IN ? ',' + window.DITHER_IN : '');
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if (!e.isIntersecting) return; io.unobserve(e.target); dissolve(e.target); });
    }, { rootMargin: '0px 0px -12% 0px' });
    document.querySelectorAll(sel).forEach(function(el){
      var host = el.closest('section') || document.body, m = getComputedStyle(host).backgroundColor.match(/\d+/g);
      var cv = document.createElement('canvas'); cv.className = 'dz'; cv.setAttribute('aria-hidden','true');
      if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
      el.appendChild(cv); el._dz = { cv: cv, bg: m ? m.slice(0,3).map(Number) : PAL[0] };
      io.observe(el);
    });
    function dissolve(el){
      var o = el._dz, cv = o.cv, w = Math.ceil(el.offsetWidth/CELL), h = Math.ceil(el.offsetHeight/CELL);
      cv.width = w; cv.height = h;
      var ctx = cv.getContext('2d'), id = ctx.createImageData(w,h), d = id.data, seed = [];
      for (var i=0; i<w*h; i++) { var x=i%w, y=(i/w)|0; seed[i] = B[(y&3)*4+(x&3)]*0.55 + (y/h)*0.3 + Math.random()*0.15; }
      var t0 = performance.now(), dur = 750;
      (function step(now){
        var th = (now - t0)/dur * 1.35;
        for (var i=0; i<w*h; i++) {
          var j=i*4, v=seed[i];
          if (th > v + 0.3) d[j+3]=0;
          else if (th > v) put(d,j,1,255);
          else { d[j]=o.bg[0]; d[j+1]=o.bg[1]; d[j+2]=o.bg[2]; d[j+3]=255; }
        }
        ctx.putImageData(id,0,0);
        if (th < 1.4) requestAnimationFrame(step); else cv.remove();
      })(t0);
    }
  }
})();
