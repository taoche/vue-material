<template>
  <div class="example-dialog">
    <h3>基础使用</h3>
    <button @click="show =true">显示dialog</button>
    <component-dialog :show.sync="show">
      <div slot="content">
        <h5>基本的 Dialog 组件的使用</h5>
      </div>
    </component-dialog>

    <example-code>
      <textarea>
      <button @click="show = true">显示dialog</button>

      <component-dialog :show.sync="show">
        <div slot="content">
          <h5>基本的Dialog组件的使用</h5>
        </div>
      </component-dialog>
      </textarea>
    </example-code>
  </div>
</template>

<script>
import dialog from 'vue-material-ui/src/dialog/dialog'
import code from '../example-code'

export default {
  name: 'example-dialog',
  data () {
    return {
      show: false
    }
  },
  components: {
    'component-dialog': dialog,
    'example-code': code
  }
}
</script>

<style lang="scss">
</style>
