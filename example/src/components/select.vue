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
      selected: '男'
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
