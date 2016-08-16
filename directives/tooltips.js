import parseHtml from 'utils/parseHtml'
import handleEvent from 'utils/handleEvent'

const templateTooltip = (text, direction) => {
  return parseHtml(`<div class="component-tooltip" style="top: ${direction.x}px; left: ${direction.y}px">
    <span class="tooltip-text">${text}</span>
  </div>`)
}

export default {
  bind () {
    const direction = {
      top: {
        x: 0,
        y: -30
      },
      right: {
        x: 30,
        y: 0
      },
      bottom: {
        x: 0,
        y: 30
      },
      left: {
        x: -30,
        y: 0
      }
    }

    const $tooltip = templateTooltip(this.expression, direction[this.arg] || 'bottom')

    const enterHanlder = () => {
      this.el.appendChild($tooltip)
    }

    const leaveHanlder = () => {
      this.el.removeChild($tooltip)
    }

    this.enterHanlder = handleEvent('mouseenter', {
      element: this.el,
      callback: enterHanlder
    })

    this.leaveHanlder = handleEvent('mouseleave', {
      element: this.el,
      callback: leaveHanlder
    })
  },
  unbind () {
    this.enterHanlder.destroy()
    this.leaveHanlder.destroy()
  }
}
