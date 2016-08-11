import parseHtml from 'utils/parseHtml'

export default {
  bind () {
    const ripple = (x, y) => {
      return parseHtml(`<span class="ripple" style="left:${x - 2}px;top:${y - 2}px"></span>`)
    }

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
        domRipple.parentNode.removeChild(domRipple)
      })
    }

    this.el.addEventListener('mousedown', this.mousedownHandle)
  },
  unbind () {
    this.el.removeEventListener('mousedown', this.mousedownHandle)
  }
}
