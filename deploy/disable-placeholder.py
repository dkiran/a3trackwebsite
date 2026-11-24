"""Comment out the placeholder `server { ... }` blocks that listen on port 80 in an nginx.conf.

Used by setup-server.sh on Amazon Linux, whose stock nginx.conf contains a demo server on
port 80. Only blocks that serve nginx's own demo page (/usr/share/nginx/html) are touched.
"""
import re
import sys

path = sys.argv[1]
text = open(path).read()
lines = text.split('\n')
out, i, changed = [], 0, 0
while i < len(lines):
    line = lines[i]
    if re.match(r'\s*server\s*\{\s*$', line):
        depth, j = 0, i
        while j < len(lines):
            depth += lines[j].count('{') - lines[j].count('}')
            if depth == 0:
                break
            j += 1
        block = lines[i:j + 1]
        body = '\n'.join(block)
        if re.search(r'listen\s+(\[::\]:)?80\s*;', body) and '/usr/share/nginx/html' in body:
            out += ['#veyro-disabled# ' + l for l in block]
            changed += 1
            i = j + 1
            continue
    out.append(line)
    i += 1
if changed:
    open(path, 'w').write('\n'.join(out))
print(f'placeholder server blocks disabled: {changed}')
