# Sample Speech Recognition with React

This a really simple app that uses speech recognition, it will transcript what it hears. Under the hood it uses https://www.npmjs.com/package/react-speech-recognition library.

## UI Library

This application uses MaterialUI from google. From their docs:
```
Material UI is an open-source React component library that implements Google's Material Design.

It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.

Material UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system on top of our components.
```
https://mui.com/material-ui/getting-started/overview/


## Interesting links
 - Learn more about the speech recognition API: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition

 ## Supported browsers
- Chrome (desktop): this is by far the smoothest experience
- Safari 14.1
- Microsoft Edge
- Chrome (Android): a word of warning about this platform, which is that there can be an annoying beeping sound when turning the microphone on. This is part of the Android OS and cannot be controlled from the browser
- Android webview
- Samsung Internet