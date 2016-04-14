import parseHtml from 'utils/parseHtml'

const appendRipple = (target, x = '50%', y = '50%') => {
  let domRipple = parseHtml(`<span class="ripple" style="left:${x - 2}px;top:${y - 2}px"></span>`)

  target.appendChild(domRipple)

  domRipple.addEventListener('animationend', () => {
    domRipple.parentNode.removeChild(domRipple)
  })
}

export default appendRipple
