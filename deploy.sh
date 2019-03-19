#! /bin/bash
SITE_PATH='/www/learning-handbook'
USER='admin'
USERGROUP='admin'

cd $SITE_PATH

git reset --hard origin/master
git clean -f
git pull
chown -R $USER:$USERGROUP $SITE_PATH
