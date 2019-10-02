# C3 Crestron CH-5 UI

React based Crestron CH-5 UI.

# Install

## Install global dependencies:

`npm install -g @crestron/ch5-utilities-cli`

## Install local dependencies:

`npm install`

## Local development

`npm run`

## Build

`npm build`

a `dist/` folder will be created with all the build.

## Deploy to TSW device

Need to add the hostname or IP address of TSW device in package.json, like below code

`"build:deploy": "ch5-cli deploy -H 10.88.24.123 -t touchscreen dist/c3-home.ch5z"`
