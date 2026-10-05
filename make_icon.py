import zlib, struct, sys
def png(path, N, maskable=False):
    SS=3; bg=(42,67,196); fg=(255,255,255)
    # bolt polygon in 24-unit space (lucide bolt)
    bolt=[(13,2),(3,14),(12,14),(11,22),(21,10),(12,10),(13,2)]
    scale = 0.52 if maskable else 0.62
    def inside(x,y,poly):
        c=False
        for i in range(len(poly)-1):
            x1,y1=poly[i]; x2,y2=poly[i+1]
            if (y1>y)!=(y2>y) and x < (x2-x1)*(y-y1)/(y2-y1)+x1: c=not c
        return c
    rad = 0 if maskable else 0.22*N
    rows=[]
    for py in range(N):
        row=bytearray([0])
        for px in range(N):
            cov_bg=0; cov_fg=0
            for sy in range(SS):
                for sx in range(SS):
                    x=px+(sx+.5)/SS; y=py+(sy+.5)/SS
                    # rounded square
                    dx=max(rad-x,0,x-(N-rad)); dy=max(rad-y,0,y-(N-rad))
                    if rad and dx*dx+dy*dy>rad*rad: continue
                    cov_bg+=1
                    u=(x/N-0.5)/scale*24+12; v=(y/N-0.5)/scale*24+12
                    if inside(u,v,bolt): cov_fg+=1
            t=SS*SS; a=cov_bg/t; f=cov_fg/max(cov_bg,1)
            col=[round(bg[i]*(1-f)+fg[i]*f) for i in range(3)]
            row+=bytes(col+[round(a*255)])
        rows.append(bytes(row))
    raw=b''.join(rows)
    def chunk(t,d): return struct.pack('>I',len(d))+t+d+struct.pack('>I',zlib.crc32(t+d)&0xffffffff)
    data=b'\x89PNG\r\n\x1a\n'+chunk(b'IHDR',struct.pack('>IIBBBBB',N,N,8,6,0,0,0))+chunk(b'IDAT',zlib.compress(raw,9))+chunk(b'IEND',b'')
    open(path,'wb').write(data)
png('catchall-site/icon-180.png',180,True)  # iOS rounds corners itself
png('catchall-site/icon-192.png',192)
png('catchall-site/icon-512.png',512)
png('catchall-site/icon-maskable-512.png',512,True)
png('catchall-site/favicon-32.png',32)
