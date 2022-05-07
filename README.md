<p align="center">
<img src="https://github.com/isaacdoescodes/screenpin/blob/main/icon.png?raw=true" width="100"/>
  </p>

<h1 align="center">ScreenPin</h1>
<h3 align="center">Always there</h3>

<p align="center">
<a href="https://screenpin.isaacdoescodes.com">screenpin.isaacdoescodes.com</a>
  </p>

---

ScreenPin allows you to create ScreenPins which will not leave your screen until you close or minimize them. You can add text notes, a website view, a pdf or an image.

ScreenPin lets you refer to a note, site or file whilst never needing to resize your main window.

ScreenPin is a actively maintained open-source project so expect new features often.

---

## Development

```bash
git clone https://github.com/isaacdoescodes/screenpin.git
npm install
npm start
```

## Project Structure

```
screenpin
  |-  src

      |-  main

           |- index.js
                 The main project entry point. Launches the initial window and creates the menu.
       
      |-  renderer

           |- styles
              |- universal.css
                   Universal project styles for buttons and boilerplate styles.
           
           |- index.html
                    The screen which appears when the app is first launched.
       
           |- file.html
           |- text.html
           |- website.html    
              The screen for each screenpin type

      
      
```
