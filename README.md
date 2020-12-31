# Webpack Template

This is my current directory structure and Webpack configuration, gleaned from working through exercises in [The Odin Project](https://www.theodinproject.com). 

## Usage

1. ```git clone <repo_name>```
2. ```npm install```
3. ``` npm run start:dev```

## Global CSS

CSS suffixed with '.global.css' will affect the entire application.  All global CSS should be placed in the css/ directory.

## Local CSS

CSS suffixed with '.local.css' will be localized, as Webpack's Mini CSS loader will randomize naming conventions to ensure no colissions with other styles.

## Javascript

### Typescript

Support for Typescript is added in via Babel.  Webpack configurations were adjusted to allow for all other functions to work with Typescript files (e.g. CSS imports).

### Pages and Components

Component-based Architecture is followed whenever possible, breaking the application into two main categories:

* Pages - containers including layout, typography, and components
* Components  - individual pieces of the application UI (Menus, interfaces, text containers, etc.)

Components usually are organized into folders under the component/ directory, and a localized CSS file allows that component to be styled independantly.

for Example a 'Box' component would be organized as follows:

* components
  * Box
    * Box.js
    * Box.local.css

### Global Configuration

All globals are stored in config/AppConfig.js  for inclusion wherever needed.

## Images

Images are copied as-is into the final distribution.  Pre-processing of images may be a future improvement.

## HTML

Like images, HTML is copied directly into the final distribution.  

# Troubleshooting
If there are missing declaration issues in Visual Studio Code, restart the Typescript server to see if it helps alleviate:

```
Command Palette -> Restart TS Server
```