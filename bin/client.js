const isExtension = !!(chrome && chrome.runtime && chrome.runtime.reload)

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
        if (isExtension) {
          // 如果是chrome extension devtools环境, reload
          chrome.runtime.reload()
        }
        setTimeout(() => {
          console.log('reloading...')
          location.reload()
        }, 16);
      default:
        console.log(msg.action)
    }
  }
}