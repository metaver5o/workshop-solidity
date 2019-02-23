const workshop = require('play-workshop')

setTimeout(async () => {
  var app = await workshop()
  const el = await app.render()
  document.body.appendChild(el)
}, 0)

var st = document.createElement('style')
st.innerHTML = `
  html {
    box-sizing: border-box;
    display: table;
    min-width: 100%;
    margin: 0;
  }
  body {
    box-sizing: border-box;
    margin: 0;
    display: flex;
    flex-flow: column;
    height: 100vh;
  }`
document.head.appendChild(st)
