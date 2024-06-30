# UPSC_Akhada 
# the latest folder is upscakhada from upscakhada.com/ git main  branch and not UPSC_AKhada from ravi_shakya


cd to /opt/node-apps/upscakhada$
run git pull
sudo install npm
sudo npm run build
sudo npm start
pm2 restart "app-name" //if this doesn't load changes try commands below
-----------------------------------------------------
pm2 status //to get the app name
pm2 delete "app name"
pm2 start npm --name "next-app" -- start //this should store changes
-------------------------------------------------------

