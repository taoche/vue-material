const handleEvent = (eventName, { element, callback, useCapture = false } = {}, thisArg) => {
  const $element = element || document.documentElement

  const handler = (event) => {
    if (typeof callback === 'function') {
      callback.call(thisArg, event)
    }
  }

  handler.destroy = function () {
    return $element.removeEventListener(eventName, handler, useCapture)
  }

  $element.addEventListener(eventName, handler, useCapture)

  return handler
}

export default handleEvent
