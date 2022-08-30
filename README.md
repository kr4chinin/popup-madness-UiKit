# Pop-up Madness experimental UiKit 📧

## Introduction

This application contains not only custom **pop-up / pop-over UiKit** but also a small social net mockup to test it and take a look on its functionality. This kit may be a nice **foundation** for more complex ones, here I've implemented: 

* Dialog pop-up
* Fullscreen pop-up
* Overlaying pop-up
* Pop-over component
* Portal component
* Some **helper components** and **hooks**

![Brief functionality](https://user-images.githubusercontent.com/103210607/187419160-c3162869-253c-449f-b85c-66a8053b5b90.gif)

### Functionality

* ```<Portal />``` is the main building component for all the pop-ups. All portals are appended one after another to the special ```<div />``` with  ```id="portals"``` which is created at the very beginning. This allows to show the last opened pop-up on the screen without caring too much about z-indexes, and to close them one by one.

* ```<OverlayingPopup />``` is a frame for all the pop-ups which have **dark overlay**. It has nice animations and box for content:

<img width="500" alt="Overlaying pop-up" src="https://user-images.githubusercontent.com/103210607/187422022-32dca6ff-5e0f-4447-804b-8a1e84e39d0a.png">

* ```<Dialog />``` it's a variety of ```<OverlayingPopup />``` but it has one or two buttons, it can be used for interactions with user like a **system dialog window**:

<img width="500" alt="Dialog with two buttons" src="https://user-images.githubusercontent.com/103210607/187422581-5c320107-9ea5-4c7b-b898-6f7a1d761293.png">

<img width="500" alt="Dialog with one button" src="https://user-images.githubusercontent.com/103210607/187422752-8d60f873-27d8-411c-8a5e-e4a834973768.png">

* ```<FullscreenPopup />``` is a template for pop-ups which have size of the whole screen:

<img width="1000" alt="Fullscreen pop-up" src="https://user-images.githubusercontent.com/103210607/187423201-90d55777-787f-4a52-9949-c65932f07e5c.png">

* ```<Popover />``` can be used when you need to place one pop-up inside another one withour any overlays and difficulties. Also, [Popper](https://popper.js.org) library was used here:

<img width="350" alt="Friend pop-over" src="https://user-images.githubusercontent.com/103210607/187423841-e3fe8783-1a3b-4791-be12-1ce72f44626a.png">

<img width="500" alt="Functional pop-over" src="https://user-images.githubusercontent.com/103210607/187423892-872028cc-2af9-4a62-946f-03f67352c5c7.png">

Using this **structural elements** in this application I've also implemented:

1. Dark / light themes 

![Themes demonstration](https://user-images.githubusercontent.com/103210607/187424903-ed32a8db-fc2b-43ea-9008-0c5d35d34c6e.gif)

2. Ability to change user information using pop-ups / pop-overs, and **smooth animations**
3. **Custom hooks** such as ```useClickOutside``` to track whether user clicks outside of pop-over's body and close it
4. Ability to close pop-ups one by one by pressing *Escape* (```<EscapeListener />``` component)

<img width="400" alt="Home screen" src="https://user-images.githubusercontent.com/103210607/187426086-759d17e3-d355-4cac-a3c5-edc0c8aa3523.png">

### Tech stack

* Vite
* React + TS
* Redux Toolkit
* SASS 
* [Popper.js](https://popper.js.org)




