#!/bin/sh
# Rebuild index.html from app.html (the page body, also published as a Claude artifact).
cd "$(dirname "$0")"
{ sed -n '1,/<body>/p' index.html; cat app.html; printf '\n</body>\n</html>\n'; } > index.new && mv index.new index.html
