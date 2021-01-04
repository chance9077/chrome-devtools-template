const options = {
  path: '/__webpack_hmr'
}

if (typeof window === 'undefined') {
  // do nothing
} else if (typeof window.EventSource === 'undefined') {
  console.warn(
    `You should include a polyfill if you want to support this browser:
    https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools`
  )
} else {
  if (__resourceQuery) {
    const querystring = require('querystring')
    const query = querystring.parse(__resourceQuery.slice(1))
    options.path = query.path
  }
  connect()
}

function connect() {
  const source = new window.EventSource(options.path)
  source.onopen = handleOpen
  source.onerror = handleDisconnect
  source.onmessage = handleMessage

  var handleOpen = () => console.log('server connected')
  var handleDisconnect = () => {
    source.close()
    console.log('connect error please reload')
  }
}

function handleMessage(event) {
  if (event.data === '💓') {
    return
  } else {
    const msg = JSON.parse(event.data)
    
    switch (msg.action) {
      case 'built':
        builtHandler(msg)
        break
      default:
        console.log(msg.action)
    }
  }
}

// 接受到服务器更新消息，通知页面reload
function builtHandler() {
  const isExtension = !!(chrome && chrome.runtime)
  console.log('reloading...')
  if (isExtension) {
    chrome.runtime.sendMessage('reload')
  }
  location.reload()
}