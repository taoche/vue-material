<template>
  <div class="example-radio">
    <h3>基础使用</h3>
    <component-radio name="example1" value="example1" :model.sync="model"></component-radio>
    <component-radio name="example2" label="男" checked></component-radio>
    <component-radio name="example3" label="女" label-right></component-radio>
    <component-radio name="example4" :disabled="true"></component-radio>

    <example-code>
      <textarea>
      <component-radio name="example1" value="example1"></component-radio>
      <component-radio name="example2" label="男" checked></component-radio>
      <component-radio name="example3" label="女" label-right></component-radio>
      <component-radio name="example4" :disabled="true"></component-radio>

      data () {
        return {
          example1: '0',
          model: ''
        }
      }
      </textarea>
    </example-code>
  </div>
</template>

<script>
import radio from 'src/radio/radio'
import code from '../example-code'

export default {
  name: 'example-radio',
  components: {
    'component-radio': radio,
    'example-code': code
  },
  data () {
    return {
      example1: '0',
      model: ''
    }
  }
}
</script>

<style lang="scss">
.component-radio {
  margin: 0 6px;
}
</style>
