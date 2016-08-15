import parseHtml from 'utils/parseHtml'

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

    this.enterHanlder = () => {
      this.el.appendChild($tooltip)
    }

    this.leaveHanlder = () => {
      this.el.removeChild($tooltip)
    }

    this.el.addEventListener('mouseenter', this.enterHanlder)
    this.el.addEventListener('mouseleave', this.leaveHanlder)
  },
  unbind () {
    this.el.removeEventListener('mouseenter', this.enterHanlder)
    this.el.removeEventListener('mouseleave', this.leaveHanlder)
  }
}
