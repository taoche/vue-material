<template>
  <div class="example-search">
    <h3>基础使用</h3>
    <component-search></component-search>
    <br>
    <component-search placeholder="example-text"></component-search>
    <example-code>
      <textarea>
      <component-search></component-search>
      <component-search placeholder="example-text"></component-search>
      </textarea>
    </example-code>

    <h3>事件</h3>
    <component-search :query-text.sync="quertText"></component-search>
    <code class="example">
      搜索关键字: {{quertText | json}}
    </code>
    <example-code>
      <textarea>
      <component-search :query-text.sync="quertText"></component-search>
      </textarea>
    </example-code>
  </div>
</template>

<script>
import search from 'vue-material-ui/src/search/search'
import code from '../example-code'

export default {
  name: 'example-search',
  data () {
    return {
      quertText: ''
    }
  },
  components: {
    'component-search': search,
    'example-code': code
  }
}
</script>

<style lang="scss">
</style>
