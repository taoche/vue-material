<template>
  <div class="example-dialog">
    <h3>基础使用</h3>
    <button @click="show=true">显示dialog</button>

    <button @click="showModal=true">显示带modal的dialog</button>

    <component-dialog class="component-dialog" v-if="show" :show.sync="show">
      <div slot="content">
        <h3>你知道如何使用 Dialog 组件吗 ?</h3>
        <p>基本的 Dialog 组件的使用</p>
      </div>
    </component-dialog>


    <component-dialog class="component-dialog" v-if="showModal" :show.sync="showModal" :is-modal="true">
      <div slot="content">
        <h3>你知道如何使用 Dialog 组件吗 ?</h3>
        <p>基本的 Dialog 组件的使用</p>
      </div>
    </component-dialog>

    <example-code>
      <textarea>
      <button @click="show = true">显示dialog</button>

      <component-dialog v-if="show" :show.sync="show" class="component-dialog">
        <div slot="content">
          <h5>基本的Dialog组件的使用</h5>
        </div>
      </component-dialog>
      </textarea>
    </example-code>

    <example-code>
      <textarea>
       <button @click="showModal=true">显示带modal的dialog</button>

      <component-dialog class="component-dialog" v-if="showModal" :show.sync="showModal" :is-modal="true">
        <div slot="content">
          <h3>你知道如何使用 Dialog 组件吗 ?</h3>
          <p>基本的 Dialog 组件的使用</p>
        </div>
      </component-dialog>
      </textarea>
    </example-code>
  </div>
</template>

<script>
import dialog from 'src/dialog/dialog'
import code from '../example-code'

export default {
  name: 'example-dialog',
  data () {
    return {
      show: false,
      showModal: false
    }
  },
  components: {
    'component-dialog': dialog,
    'example-code': code
  }
}
</script>

<style lang="scss">
.component-dialog {
  .dialog-container {
    width: 360px;
  }
}
</style>
