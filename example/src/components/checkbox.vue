<template>
  <div class="example-avatar">
    <h3>基础使用</h3>
    <component-checkbox></component-checkbox>
    <component-checkbox :is-disabled="true"></component-checkbox>

    <example-code>
      <textarea>
      <component-checkbox></component-checkbox>
      <component-checkbox :is-disabled="true"></component-checkbox>
      </textarea>
    </example-code>

    <h3>事件</h3>
    <component-checkbox :is-checked.sync="checkboxState"></component-checkbox>

    <code class="example">
      {{checkboxState | json}}
    </code>

    <example-code>
      <textarea>
      <component-checkbox :is-checked.sync="checkboxState"></component-checkbox>
      </textarea>
    </example-code>

    <component-checkbox></component-checkbox>

    <code class="example">
      {{eventOnState | json}}
    </code>

    <example-code>
      <textarea>
      <component-checkbox></component-checkbox>

      data () {
        return {
          eventOnState: false
        }
      },
      events: {
        'checkbox-state-change' (event, state) {
          this.eventOnState = state
        }
      }
      </textarea>
    </example-code>

  </div>
</template>

<script>
import checkbox from 'vue-material-ui/src/checkbox/checkbox'
import code from '../example-code'

export default {
  name: 'example-checkbox',
  data () {
    return {
      checkboxState: false,
      eventOnState: false
    }
  },
  events: {
    'checkbox-state-change' (event, state) {
      this.eventOnState = state
    }
  },
  components: {
    'component-checkbox': checkbox,
    'example-code': code
  }
}
</script>

<style lang="scss">

</style>
