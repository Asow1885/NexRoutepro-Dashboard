@echo off
echo Updating NexRoutePro Dashboard...
cd frontend
git add index.html route_planning.html styles.css
git commit -m "Automated Update: Updated NexRoutePro Dashboard and Route Planning with CSS"
git push origin main
echo NexRoutePro Dashboard Updated Successfully.
pause
