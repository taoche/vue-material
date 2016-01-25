<template>
  <div class="example-radio">
    <h3>基础使用</h3>
    <component-radio :active-name.sync="activeName" name="example1"></component-radio>
    <component-radio :active-name.sync="activeName" name="example2"></component-radio>
    <component-radio :active-name.sync="activeName" state="disabled"></component-radio>

    <code class="example">
      选择的radio : {{activeName | json}}
    </code>

    <example-code>
      <textarea>
      <component-radio :active-name.sync="activeName" name="example1"></component-radio>
      <component-radio :active-name.sync="activeName" name="example2"></component-radio>
      <component-radio :active-name.sync="activeName" state="disabled"></component-radio>

      data () {
        return {
          activeName: 'example1'
        }
      },
      events: {
        'radio-click' (state) {
          window.alert(state)
        }
      }
      </textarea>
    </example-code>
  </div>
</template>

<script>
import radio from 'vue-material-ui/src/radio/radio'
import code from '../example-code'

export default {
  name: 'example-radio',
  data () {
    return {
      activeName: 'example1'
    }
  },
  events: {
    'radio-click' (state) {
      window.alert(state)
    }
  },
  components: {
    'component-radio': radio,
    'example-code': code
  }
}
</script>

<style lang="scss">
</style>
