<template>
<div class="example-pre">
  <slot>
  </slot>
</div>
</template>

<script>
import showdown from 'showdown'
import hljs from 'highlight.js'

export default {
  name: 'example-code',
  ready () {
    let converter = new showdown.Converter()

    hljs.configure({
      classPrefix: ''
    })

    let _html = converter.makeHtml(JSON.parse(JSON.stringify(document.querySelector('textarea').value)))

    document.querySelector('textarea').outerHTML = `<pre class="prettyprint html">${_html}</pre>`

    Array.from(document.querySelectorAll('.prettyprint')).forEach((element, index) => {
      hljs.highlightBlock(element)
    })
  }
}
</script>

<style lang="scss">
code, pre {
  font-size: 14px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
  color: #34495e;
  font-family: 'Source Code Pro', 'Roboto Mono', Monaco, courier, monospace;
}

pre {
  padding: 5px 10px;
}

pre .function .keyword,
pre .constant {
  color: #0092db;
}

pre .keyword,
pre .attribute {
  color: #e96900;
}

pre .number,
pre .literal {
  color: #ae81ff;
}

pre .tag,
pre .tag .title,
pre .change,
pre .winutils,
pre .flow,
pre .lisp .title,
pre .clojure .built_in,
pre .nginx .title,
pre .tex .special {
  color: #2973b7;
}

pre .symbol,
pre .symbol .string,
pre .value,
pre .regexp {
  color: #42b983;
}

pre .title {
  color: #83b917;
}

pre .tag .value,
pre .string,
pre .subst,
pre .haskell .type,
pre .preprocessor,
pre .ruby .class .parent,
pre .built_in,
pre .sql .aggregate,
pre .django .template_tag,
pre .django .variable,
pre .smalltalk .class,
pre .javadoc,
pre .django .filter .argument,
pre .smalltalk .localvars,
pre .smalltalk .array,
pre .attr_selector,
pre .pseudo,
pre .addition,
pre .stream,
pre .envvar,
pre .apache .tag,
pre .apache .cbracket,
pre .tex .command,
pre .prompt {
  color: #42b983;
}

pre .comment,
pre .java .annotation,
pre .python .decorator,
pre .template_comment,
pre .pi,
pre .doctype,
pre .shebang,
pre .apache .sqbracket,
pre .tex .formula {
  color: #b3b3b3;
}

pre .deletion {
  color: #ba4545;
}

pre .coffeescript .javascript,
pre .javascript .xml,
pre .tex .formula,
pre .xml .javascript,
pre .xml .vbscript,
pre .xml .css,
pre .xml .cdata {
  opacity: .5;
}
</style>
