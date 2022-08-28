#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd dist
# navigate into the build output directory

# if you are deploying to a custom domain
echo 'kduwadi.com' > CNAME

cd ..

gh-pages -d dist