let puppeteer = require('puppeteer')

console.log('Before')

//puppeteer is a promise base function

let browserWillbeLauncedPromise = puppeteer.launch({
       headless:false,  //visiblity
       defaultViewport:null, //fullscreen
       rgs: ['--start-maximized'] 
})

browserWillbeLauncedPromise.then(function(browserInstance){
       let newTabPromise= browserInstance.newPage()
       return newTabPromise;
}).then(function (newTab){
  console.log('New Tab opened')
  let pageWillbeOpenedPromise = newTab.goto('https://www.pepcoding.com/')
  return pageWillbeOpenedPromise

}).then(function(webPage){
       console.log('Website opened')
})


console.log('After')