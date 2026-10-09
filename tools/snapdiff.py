import json, sys
a=json.load(open(sys.argv[1])); b=json.load(open(sys.argv[2]))
total=0
for st in a:
    A=dict(map(tuple,a[st])); B=dict(map(tuple,b.get(st,[])))
    diffs=[]
    for k in set(A)|set(B):
        if k not in A or k not in B: diffs.append((k,'(element missing in '+('before' if k not in A else 'after')+')')); continue
        for p in A[k]:
            if A[k][p]!=B[k].get(p): diffs.append((k,f'{p}: {A[k][p]!r} -> {B[k].get(p)!r}'))
    total+=len(diffs)
    if diffs:
        print(f'== {st}: {len(diffs)} differences')
        for k,d in diffs[:int(sys.argv[3]) if len(sys.argv)>3 else 6]: print('   ', k[-70:], '|', d[:160])
print('TOTAL differences:', total)
