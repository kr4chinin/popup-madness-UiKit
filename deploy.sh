set -e

npm run build

cd dist

git checkout main
git add -A
git commit -m 'deploy'

git push -f git@github.com:kr4chinin/popup-madness-UiKit.git main:gh-pages

cd -
