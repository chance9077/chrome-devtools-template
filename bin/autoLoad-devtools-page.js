if (process.env.NODE_ENV === 'development') {
  if (chrome && chrome.runtime) {
    chrome.runtime.onMessage.addListener(action => {
      console.log('devtools: ', action)
      action === 'reload' && window.location.reload()
    })
  }
}