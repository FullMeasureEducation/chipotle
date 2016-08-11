# Auto-Chipotle
Automate chipotle group order to save a couple clicks

After you add all of the emails the first time at https://order.chipotle.com/Invitational/Index/122

```js
//install selenium 
brew install selenium-server-standalone
brew services start selenium-server-standalone

//install chrome driver
brew install chromedriver

//navigate to the chipotle directory in your terminal
~/code/chipotle
//install nightwatch globally
npm install -g nightwatch

//open chipotle.js
//change the email and password vars to match your own
var email = 'samuel.birk@gmail.com'
var password = 'password'

//navigate to the chipotle directory in your terminal
//run nightwatch
nightwatch
```

http://nightwatchjs.org/

