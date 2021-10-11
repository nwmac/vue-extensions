# vue-extenstions

Shows how to use WebPack module federation.

This is using Vue 2, but with WebPack 5.

To start:


## Build the example extension as a library:

cd vlib
yarn install
yarn lib
yarn start

This will build as a Vuwe library and serve the built library on localhost:8001

## Build the example app:

cd hostapp
yarn install
yarn server

## How to use

Build and serve both the lib and app above.

Open a browser to: http://127.0.0.1:8080/

Click 'Load Extension'. This loads the extension library and presents 2 components available in the library - clicking on 'Lazy' will load the lazily-loaded component.

If you click 'Lazy', you'll see two clock widgets.

If you look in the web dev tools, you'll see that the code for the clock widget is not loaded a 2nd time when you load the Lazy component.

Edit the file `hostapp/src/App.vue` and comment out the Clock import and remove `Clock` from the component.

The UI will no longer show a clock at the top of the page. Now when you click on `Load Extension` and then `Lazy`, the clock will appear as before, but you'll see from the dev tools that the code for the clock widget was loaded.

This illustrates how shared dependencies are used in Module Federaton avoiding the need to load the code for the clock widget twice.





