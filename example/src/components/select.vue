<template>
  <div class="example-select">
    <h3>基础使用</h3>
    <component-select :values="values" :selected.sync="selected"></component-select>

    <code class="example">
      selected: {{selected | json}}
    </code>

    <example-code>
      <textarea>
      <component-select :values="values" :selected.sync="selected"></component-select>

      data () {
        return {
          values: ['请选择', '男', '女'],
          selected: '男'
        }
      }
      </textarea>
    </example-code>


    <h3>拓展——选择数量超过10个  支持搜索 和 键盘选择</h3>
    <component-select :values="moreValues" :selected.sync="moreSelected"></component-select>

    <code class="example">
      selected: {{moreSelected | json}}
    </code>

    <example-code>
      <textarea>
      <component-select :values="moreValues" :selected.sync="moreSelected"></component-select>

      data () {
        return {
          moreValues: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
          moreSelected: ''
        }
      }
      </textarea>
    </example-code>
  </div>
</template>

<script>
import select from 'vue-material-ui/src/select/select'
import code from '../example-code'

export default {
  name: 'example-select',
  data () {
    return {
      values: ['请选择', '男', '女'],
      moreValues: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
      selected: '男',
      moreSelected: ''
    }
  },
  components: {
    'component-select': select,
    'example-code': code
  }
}
</script>

<style lang="scss">
</style>
