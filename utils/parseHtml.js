const parseHtml = (fragments) => {
  let tmp = document.implementation.createHTMLDocument()
  tmp.body.innerHTML = fragments
  return tmp.body.children[0]
}

export default parseHtml
