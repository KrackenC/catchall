"""Catchall app icon: a yellow sticky note pinned with a red thumbtack on ink blue. Pure Python (no PIL)."""
import zlib, struct, math, os

BG = (42, 67, 196)
NOTE = (255, 214, 72); NOTE_LINE = (226, 184, 46); FOLD = (226, 178, 40)
SHADOW = (14, 24, 80, 0.38)
PIN = (229, 72, 77); PIN_HI = (255, 150, 150); PIN_DARK = (168, 38, 46)

def over(dst, src, a):
    return tuple(dst[i] * (1 - a) + src[i] * a for i in range(3))

def sample(u, v, maskable):
    """u,v in 0..1 icon space -> (rgb, alpha)."""
    s = 0.8 if maskable else 1.0                     # keep inside Android safe zone
    x = (u - 0.5) / s + 0.5; y = (v - 0.5) / s + 0.5
    col = BG
    th = math.radians(-7)
    def note_local(px, py, cx=0.5, cy=0.55):
        dx, dy = px - cx, py - cy
        return dx * math.cos(-th) - dy * math.sin(-th), dx * math.sin(-th) + dy * math.cos(-th)
    h = 0.31; fold = 0.11
    def in_note(lx, ly):
        if abs(lx) > h or abs(ly) > h: return False
        return (lx - (h - fold)) + (ly - (h - fold)) <= fold  # bottom-right corner is cut off
    # shadow of note
    lx, ly = note_local(x - 0.018, y - 0.03)
    if in_note(lx, ly): col = over(col, SHADOW[:3], SHADOW[3])
    # note
    lx, ly = note_local(x, y)
    if in_note(lx, ly):
        col = NOTE
        for ry in (-0.02, 0.07, 0.16):              # ruled lines
            if abs(ly - ry) < 0.011 and -0.22 < lx < (0.22 if ry < 0.1 else 0.08): col = NOTE_LINE
    # folded corner flap: the triangle cut off the bottom-right corner
    fx, fy = lx - (h - fold), ly - (h - fold)
    if fx >= 0 and fy >= 0 and fx + fy <= fold: col = FOLD
    # thumbtack (in icon space, sits on top edge of note)
    pcx, pcy = 0.5, 0.29
    r = math.hypot(x - pcx - 0.012, y - pcy - 0.022)
    if r < 0.095: col = over(col, SHADOW[:3], 0.35)   # pin shadow
    r = math.hypot(x - pcx, y - pcy)
    if r < 0.088:
        col = PIN
        if math.hypot(x - pcx + 0.004, y - pcy - 0.004) > 0.074 and (y - pcy) > 0: col = PIN_DARK  # rim
        if math.hypot(x - pcx + 0.03, y - pcy + 0.03) < 0.026: col = PIN_HI
    return col

def png(path, N, rounded, maskable=False):
    SS = 4 if N <= 64 else 3
    rad = 0.22 * N if rounded else 0
    raw = bytearray()
    for py in range(N):
        raw.append(0)
        for px in range(N):
            acc = [0.0, 0.0, 0.0]; cov = 0
            for sy in range(SS):
                for sx in range(SS):
                    X = px + (sx + .5) / SS; Y = py + (sy + .5) / SS
                    if rad:
                        dx = max(rad - X, 0, X - (N - rad)); dy = max(rad - Y, 0, Y - (N - rad))
                        if dx * dx + dy * dy > rad * rad: continue
                    c = sample(X / N, Y / N, maskable); cov += 1
                    for i in range(3): acc[i] += c[i]
            if cov: raw += bytes([round(acc[0] / cov), round(acc[1] / cov), round(acc[2] / cov), round(255 * cov / (SS * SS))])
            else: raw += bytes([0, 0, 0, 0])
    def chunk(t, d): return struct.pack('>I', len(d)) + t + d + struct.pack('>I', zlib.crc32(t + d) & 0xffffffff)
    open(path, 'wb').write(b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', N, N, 8, 6, 0, 0, 0)) + chunk(b'IDAT', zlib.compress(bytes(raw), 9)) + chunk(b'IEND', b''))

if __name__ == '__main__':
    d = os.path.dirname(os.path.abspath(__file__))
    png(os.path.join(d, 'icon-512.png'), 512, True)
    png(os.path.join(d, 'icon-180.png'), 180, False)          # iOS rounds the corners itself
    png(os.path.join(d, 'icon-192.png'), 192, True)
    png(os.path.join(d, 'icon-maskable-512.png'), 512, False, True)
    png(os.path.join(d, 'favicon-32.png'), 32, True)
    print('icons written')
