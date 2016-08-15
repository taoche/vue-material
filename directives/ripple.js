import parseHtml from 'utils/parseHtml'

const ripple = (x, y) => {
  return parseHtml(`<span class="ripple" style="left:${x - 2}px;top:${y - 2}px"></span>`)
}

export default {
  bind () {
    this.mousedownHandle = (event) => {
      let x = '50%'
      let y = '50%'

      if (!this.modifiers.static) {
        x = event.pageX - event.currentTarget.offsetLeft
        y = event.pageY - event.currentTarget.offsetTop
      }

      let domRipple = ripple(x, y)

      this.el.appendChild(domRipple)

      domRipple.addEventListener('animationend', () => {
        this.el.removeChild(domRipple)
      })
    }

    this.el.addEventListener('mousedown', this.mousedownHandle)
  },
  unbind () {
    this.el.removeEventListener('mousedown', this.mousedownHandle)
  }
}
