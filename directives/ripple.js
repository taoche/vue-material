import parseHtml from 'utils/parseHtml'
import handleEvent from 'utils/handleEvent'

const ripple = (x, y) => {
  return parseHtml(`<span class="ripple" style="left:${x - 2}px;top:${y - 2}px"></span>`)
}

export default {
  bind () {
    const mousedownHandle = (event) => {
      let x = '50%'
      let y = '50%'

      if (!this.modifiers.static) {
        x = event.pageX - event.currentTarget.offsetLeft
        y = event.pageY - event.currentTarget.offsetTop
      }

      let domRipple = ripple(x, y)

      this.el.appendChild(domRipple)

      const rippleHandle = handleEvent('animationend', {
        element: domRipple,
        callback: () => {
          rippleHandle.destroy()
          this.el.removeChild(domRipple)
        }
      })
    }

    this.mousedownHandle = handleEvent('mousedown', {
      element: this.el,
      callback: mousedownHandle
    })
  },
  unbind () {
    this.mousedownHandle.destroy()
  }
}
