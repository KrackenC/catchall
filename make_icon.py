"""Catchall app icon: renders icon.svg (a note and a card dropping into a rust tray, on plum) to the PNG sizes with headless Chrome."""
import os, subprocess, tempfile

CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

def png(svg, path, N, rounded, maskable=False):
    if maskable:  # shrink the art into Android's 80% safe zone, keep the background full bleed
        svg = svg.replace('<g id="art">', '<g id="art" transform="translate(51.2 51.2) scale(.8)">')
    with tempfile.TemporaryDirectory() as t:
        open(os.path.join(t, 'i.svg'), 'w').write(svg)
        page = os.path.join(t, 'i.html')
        open(page, 'w').write(f'<html><body style="margin:0"><img src="i.svg" style="display:block;width:{N}px;height:{N}px;border-radius:{0.22 * N if rounded else 0}px"></body></html>')
        subprocess.run([CHROME, '--headless=new', '--hide-scrollbars', '--default-background-color=00000000', f'--window-size={N},{N}',
                        f'--screenshot={path}', 'file://' + page], check=True, capture_output=True)

if __name__ == '__main__':
    d = os.path.dirname(os.path.abspath(__file__))
    svg = open(os.path.join(d, 'icon.svg')).read()
    png(svg, os.path.join(d, 'icon-512.png'), 512, True)
    png(svg, os.path.join(d, 'icon-180.png'), 180, False)          # iOS rounds the corners itself
    png(svg, os.path.join(d, 'icon-192.png'), 192, True)
    png(svg, os.path.join(d, 'icon-maskable-512.png'), 512, False, True)
    png(svg, os.path.join(d, 'favicon-32.png'), 32, True)
    print('icons written')
