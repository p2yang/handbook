#! /bin/bash
# 确保脚本抛出遇到的错误
set -e

cd /www/learning-handbook

git reset --hard origin/master
git clean -f
git pull

# 生成静态文件
npm run build

git add -A
git commit -m 'deploy'
git push

cd -
