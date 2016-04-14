<template>
  <div class="example-avatar">
    <h3>基础使用</h3>
    <component-button>
      <span slot="content">按钮</span>
    </component-button>

    <component-button theme="primary">
      <span slot="content">按钮</span>
    </component-button>

    <component-button theme="danger">
      <span slot="content">按钮</span>
    </component-button>

    <component-button theme="accent">
      <span slot="content">按钮</span>
    </component-button>

    <example-code>
      <textarea>
      <component-button>
        <span slot="content">按钮</span>
      </component-button>

      <component-button theme="primary">
        <span slot="content">按钮</span>
      </component-button>

      <component-button theme="danger">
        <span slot="content">按钮</span>
      </component-button>

      <component-button theme="accent">
        <span slot="content">按钮</span>
      </component-button>
      </textarea>
    </example-code>

    <h3>事件</h3>
    <component-button theme="primary" state="disabled">
      <span slot="content">按钮</span>
    </component-button>

    <component-button theme="primary" type="submit">
      <span slot="content">按钮</span>
    </component-button>

     <component-button theme="primary" event-name="example-btn-event">
      <span slot="content">事件触发</span>
    </component-button>

    <example-code>
      <textarea>
      <component-button theme="primary" state="disabled">
        <span slot="content">按钮</span>
      </component-button>

      <component-button theme="primary" type="submit">
        <span slot="content">按钮</span>
      </component-button>


      <component-button theme="primary" event-name="example-btn-event">
        <span slot="content">事件触发</span>
      </component-button>

      dnew Vue({
        el: '#example',
        events: {
          'example-btn-event' () {
            window.alert('example-btn-event')
          }
        }
      })
      </textarea>
    </example-code>
  </div>
</template>

<script>
import buttons from 'src/buttons/buttons'
import code from '../example-code'

export default {
  name: 'example-avatar',
  events: {
    'example-btn-event' () {
      window.alert('example-btn-event')
    }
  },

  components: {
    'component-button': buttons,
    'example-code': code
  }
}
</script>

<style lang="scss">

</style>
