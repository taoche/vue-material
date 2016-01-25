<template>
  <div class="example-input">
    <h3>基础使用</h3>
    <component-input value="输入框的基本使用"></component-input>
    <component-input :is-read-only="true"></component-input>
    <component-input :is-disabled="true"></component-input>
    <component-input :error="true"></component-input>
    <component-input hint="请输入密码"></component-input>

    <example-code>
      <textarea>
      <component-input value="输入框的基本使用"></component-input>
      <component-input :is-read-only="true"></component-input>
      <component-input :is-disabled="true"></component-input>
      <component-input :error="true"></component-input>
      <component-input hint="请输入密码"></component-input>
      </textarea>
    </example-code>

    <h3>事件</h3>
    <component-input :value.sync="exampleValue"></component-input>

    <code class="example">
      value: {{exampleValue | json}}
    </code>

    <example-code>
      <textarea>
      <component-input :value.sync="exampleValue"></component-input>
      </textarea>
    </example-code>

  </div>
</template>

<script>
import input from 'vue-material-ui/src/input/input'
import code from '../example-code'

export default {
  name: 'example-input',
  data () {
    return {
      exampleValue: ''
    }
  },
  components: {
    'component-input': input,
    'example-code': code
  }
}
</script>

<style lang="scss">
</style>
