function xrDebounce(fn, delay, immediate = true) {
  let timer = null
  let isInvoke = true
  return function (...args) {
    if (timer) clearTimeout(timer)

    if (immediate && isInvoke) {
      fn.apply(this, args)
      isInvoke = false
      return
    }

    timer = setTimeout(() => {
      fn.apply(this, args)
      isInvoke = true
    }, delay)
  }
}