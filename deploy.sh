#! /bin/bash
# 确保脚本抛出遇到的错误
set -e

SITE_PATH='/www/learning-handbook'
USER='admin'
USERGROUP='admin'

cd $SITE_PATH

git reset --hard origin/master
git clean -f
git pull
chown -R $USER:$USERGROUP $SITE_PATH

# 生成静态文件
npm run build

git add -A
git commit -m 'deploy'
git push -f

cd -
