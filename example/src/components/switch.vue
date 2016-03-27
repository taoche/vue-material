<template>
  <div class="example-switch">
    <h3>基础使用</h3>
    <component-switch></component-switch>
    <component-switch :is-check="true"></component-switch>
    <component-switch :is-disabled="true"></component-switch>

    <example-code>
      <textarea>
      <component-switch></component-switch>
      <component-switch :is-check="true"></component-switch>
      <component-switch :is-disabled="true"></component-switch>
      </textarea>
    </example-code>

    <component-switch :is-check.sync="isCheck"></component-switch>

    <code class="example">
      isCheck: {{isCheck | json}}
    </code>

    <example-code>
      <textarea>
      <component-switch :is-check.sync="isCheck"></component-switch>

      watch: {
        isCheck (state) {
          console.log(state)
        }
      }
      ------------- OR ------------------
      events: {
        'component-switch-toggle' (state) {
          console.log(state)
        }
      }
      </textarea>
    </example-code>

  </div>
</template>

<script>
import cswitch from 'vue-material-ui/src/switch/switch'
import code from '../example-code'

export default {
  name: 'example-switch',
  data () {
    return {
      isCheck: false
    }
  },
  watch: {
    isCheck (state) {
      console.log(state)
    }
  },
  events: {
    'component-switch-toggle' (state) {
      console.log(state)
    }
  },
  components: {
    'component-switch': cswitch,
    'example-code': code
  }
}
</script>

<style lang="scss">
</style>
