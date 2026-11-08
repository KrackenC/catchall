"""Catchall app icon: renders icon-source-cropped.png (glass "C" ribbon around stacked layers, user-supplied v44 art) to the PNG sizes with headless Chrome.
icon-source.png is the original 1254px art; icon-source-cropped.png is its centered 1180px crop (black outer corners trimmed) resized to 1024."""
import os, subprocess, tempfile, shutil

CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
BG = '#05060d'  # near-black of the art's backdrop, used behind the maskable safe-zone version

def png(src, path, N, rounded, maskable=False):
    with tempfile.TemporaryDirectory() as t:
        shutil.copy(src, os.path.join(t, 'i.png'))
        page = os.path.join(t, 'i.html')
        scale = 0.82 if maskable else 1  # keep the ribbon inside Android's 80% safe circle
        img = f'<img src="i.png" style="display:block;width:{N*scale}px;height:{N*scale}px;margin:{N*(1-scale)/2}px">'
        open(page, 'w').write(f'<html><body style="margin:0"><div style="width:{N}px;height:{N}px;overflow:hidden;'
                              f'background:{BG if maskable else "transparent"};border-radius:{0.22 * N if rounded else 0}px">{img}</div></body></html>')
        subprocess.run([CHROME, '--headless=new', '--hide-scrollbars', '--default-background-color=00000000', f'--window-size={N},{N}',
                        f'--screenshot={path}', 'file://' + page], check=True, capture_output=True)

if __name__ == '__main__':
    d = os.path.dirname(os.path.abspath(__file__))
    src = os.path.join(d, 'icon-source-cropped.png')
    png(src, os.path.join(d, 'icon-512.png'), 512, True)
    png(src, os.path.join(d, 'icon-180.png'), 180, False)          # iOS rounds the corners itself
    png(src, os.path.join(d, 'icon-192.png'), 192, True)
    png(src, os.path.join(d, 'icon-maskable-512.png'), 512, False, True)
    png(src, os.path.join(d, 'favicon-32.png'), 32, True)
    print('icons written')
