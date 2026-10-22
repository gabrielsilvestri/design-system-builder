import numpy as np, sys, os
from PIL import Image
# uso: python gen_assets.py <pasta_saida>
# gera as texturas do design system: faixas de transição, rampas, régua e sombra pontilhada
OUT = sys.argv[1] if len(sys.argv) > 1 else "."
PAL = np.array([[0x10,0x12,0x16],[0x3a,0x8c,0x85],[0xd6,0xf3,0xef]], np.uint8)
B = np.array([[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]], np.float32)
def thr(nh, nw): return np.tile((B+0.5)/16, (nh//4+1, nw//4+1))[:nh,:nw]
def dither(v, nh, nw):
    # v: float array (nh,nw) in [0,2]; level 0 dark, 1 teal, 2 light
    fl = np.floor(v)
    lvl = np.minimum(fl + ((v-fl) > thr(nh,nw)), 2).astype(int)
    return lvl
def save(lvl, name, scale=4, alpha_dark=False):
    img = PAL[lvl]
    im = Image.fromarray(img).resize((lvl.shape[1]*scale, lvl.shape[0]*scale), Image.NEAREST)
    im.save(os.path.join(OUT,name)); print(name, im.size)
# band dark->light, tile 16px wide x 96px (4 cells x 24 rows)... use 6 cells wide? keep 4x4 cells
def band(rows, flip=False):
    cols = 4
    t = np.linspace(0,1,rows)[:,None]*np.ones((1,cols))
    t = (rows and t)
    v = t*2
    lvl = dither(v, rows, cols)
    return lvl[::-1] if flip else lvl
save(band(24), 'dither-band-dl.png')
save(band(24, flip=True), 'dither-band-ld.png')
# ramps: tall tile, teal fading to dark (for dark sections) or teal to light (for light sections)
rows = 240; cols = 4
t = np.linspace(0,1,rows)[:,None]*np.ones((1,cols))
save(dither(1.0 - t*1.0, rows, cols), 'dither-ramp-dark.png')          # teal -> dark
save(dither(1.0 + t*1.0, rows, cols), 'dither-ramp-light.png')         # teal -> light
# rule: transparent + teal checker, 16x8 px (4 cells x 2 rows)
chk = np.zeros((2,4), bool); chk[0,[0,2]] = True; chk[1,[1,3]] = True
rule = np.zeros((2,4,4), np.uint8); rule[chk] = [0x3a,0x8c,0x85,255]
Image.fromarray(rule, 'RGBA').resize((16,8), Image.NEAREST).save(os.path.join(OUT,'dither-rule.png'))
# sparse 25% teal pixels transparent (for shadow blocks under buttons): bayer level 4/16
sp = np.zeros((4,4,4), np.uint8)
m = (B < 6)
sp[m] = [0x3a,0x8c,0x85,255]
Image.fromarray(sp,'RGBA').resize((16,16), Image.NEAREST).save(os.path.join(OUT,'dither-shadow.png'))
