# hivelogger
A mobile app for managing honeybee colonies in multiple apiaries and assessing queen performance.
A sticky-finger friendly UI. 

# getting up and running
1. Clone the repo
2. Run 'ionic capacitor build'
3. Open the android directory in Android Studio

Since I'm developing in WSL2 I needed to follow these instructions to run on my Android phone.
https://learn.microsoft.com/en-us/windows/wsl/connect-usb#attach-a-usb-device


# Phase 1
Create a CRUD app using Ionic and Vue with objects: apiaries, colonies, visits, queens
My old app assumed one user which greatly simplified things. I'd like to move forward assuming each user will have their own db. Multiple users modifying the same database adds a lot of complexity and could be a paid feature in the future.

Assume locally stored db with ability to for Cloud backup. 

