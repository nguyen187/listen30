#!/bin/sh
# Rebuild index.html from app.html (the page body, also published as a Claude artifact),
# and export the mock meetings to meetings.js for Talk Shop.
cd "$(dirname "$0")"
{ sed -n '1,/<body>/p' index.html; cat app.html; printf '\n</body>\n</html>\n'; } > index.new && mv index.new index.html
python3 - <<'PY'
s = open('app.html', encoding='utf-8').read()
i = s.index('const MEETS=[')
j = s.index('\n];', i) + 3
open('meetings.js', 'w', encoding='utf-8').write('// generated from app.html by build.sh\nwindow.L30_MEETS=' + s[i+len('const MEETS='):j] + '\n')
PY
