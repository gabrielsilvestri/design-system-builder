# ilustração do hero: interface em pixel art com dither Bayer 4x4 em 3 tons, fundo transparente
import sys
import numpy as np
from PIL import Image

W, H, S = 240, 300, 4
T = np.full((H, W), -1.0, np.float32)  # -1 = transparente
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)

def rect(x0, y0, x1, y1, t):
    T[y0:y1, x0:x1] = t

# esfera sombreada atrás (luz do alto à esquerda)
cx, cy, r = 150, 118, 92
dx, dy = (xx - cx) / r, (yy - cy) / r
d2 = dx * dx + dy * dy
m = d2 <= 1
nz = np.sqrt(np.clip(1 - d2, 0, 1))
lx, ly, lz = -0.55, -0.6, 0.58
sh = np.clip(dx * lx + dy * ly + nz * lz, 0, 1)
if 'nosphere' not in sys.argv:
    T[m] = (0.08 + 0.9 * sh ** 1.3)[m]

# janela
x0, y0, x1, y1 = 18, 112, 202, 284
rect(x0 - 1, y0 - 1, x1 + 1, y1 + 1, 0.5)   # borda teal
rect(x0, y0, x1, y1, 0.0)                    # corpo escuro
rect(x0, y0, x1, y0 + 13, 0.5)               # barra de título
for i, cxp in enumerate((26, 34, 42)):
    rect(cxp, y0 + 5, cxp + 4, y0 + 9, 1.0)
rect(150, y0 + 5, 194, y0 + 8, 0.0)          # "url"

# bloco de imagem com rampa diagonal
bx0, by0, bx1, by1 = 28, 134, 192, 192
g = ((xx - bx0) / (bx1 - bx0) * 0.55 + (by1 - yy) / (by1 - by0) * 0.45)
sub = (slice(by0, by1), slice(bx0, bx1))
T[sub] = np.clip(0.05 + 0.92 * g[sub], 0, 1)
# montanha e sol no bloco
for x in range(bx0, bx1):
    hgt = int(by1 - 14 - 12 * np.sin((x - bx0) / 18.0) - 6 * np.sin((x - bx0) / 7.0))
    T[hgt:by1, x] = np.clip(T[hgt:by1, x] * 0.35, 0, 1)
sun = ((xx - 165) ** 2 + (yy - 150) ** 2) <= 64
T[sun & (T >= 0)] = 1.0

# hierarquia: título, texto, botão
rect(28, 200, 150, 208, 1.0)
rect(28, 212, 112, 220, 1.0)
for y, x_end in ((228, 182), (236, 168), (244, 124)):
    rect(28, y, x_end, y + 3, 0.5)
rect(28, 256, 92, 272, 1.0)                  # botão
rect(38, 263, 80, 265, 0.0)
rect(100, 256, 150, 272, 0.5)                # botão secundário (contorno)
rect(102, 258, 148, 270, 0.0)
rect(110, 263, 140, 265, 0.5)

# cursor sobre o botão
cur = [
    "X.........",
    "XX........",
    "XOX.......",
    "XOOX......",
    "XOOOX.....",
    "XOOOOX....",
    "XOOOOOX...",
    "XOOOOOOX..",
    "XOOOOXXXX.",
    "XOXOOX....",
    "XX.XOOX...",
    "X..XOOX...",
    "....XOOX..",
    "....XXX...",
]
ox, oy = 80, 262
for j, row in enumerate(cur):
    for i, c in enumerate(row):
        if c in "XO":
            T[oy + 2 * j:oy + 2 * j + 2, ox + 2 * i:ox + 2 * i + 2] = 0.0 if c == "X" else 1.0

# brilhos em pixel
def sparkle(x, y, n):
    T[y - n:y + n + 1, x] = 1.0
    T[y, x - n:x + n + 1] = 1.0
sparkle(226, 40, 4)
sparkle(30, 70, 3)
sparkle(214, 236, 2)

# dither Bayer 4x4 em 3 níveis
b = np.array([[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]], np.float32)
thr = np.tile((b + 0.5) / 16, (H // 4 + 1, W // 4 + 1))[:H, :W]
v = np.clip(T, 0, 1) * 2
nivel = np.minimum(np.floor(v) + ((v - np.floor(v)) > thr), 2).astype(int)
pal = np.array([[0x10, 0x12, 0x16, 255], [0x3a, 0x8c, 0x85, 255], [0xd6, 0xf3, 0xef, 255]], np.uint8)
img = pal[nivel]
img[T < 0] = (0, 0, 0, 0)
Image.fromarray(img, "RGBA").resize((W * S, H * S), Image.NEAREST).save(sys.argv[1])
print(sys.argv[1], W * S, H * S)
