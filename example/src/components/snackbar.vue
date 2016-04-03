<template>
  <div class="example-snackbar">
    <h3>基础使用</h3>
    <button @click="showSnackbar=true">snackbar</button>
    <component-snackbar v-if="showSnackbar"
      msg="Event added to your calendar" :show.sync="showSnackbar" action-text="已读"></component-snackbar>

    <example-code>
      <textarea>
      <component-snackbar v-if="showSnackbar"
        msg="Event added to your calendar" :show.sync="showSnackbar" action-text="已读"></component-snackbar>

      data () {
        return {
          showSnackbar: false
        }
      }
      </textarea>
    </example-code>

    <h3>事件</h3>
    <example-code>
      <textarea>
      <component-snackbar v-if="showSnackbar"
        msg="Event added to your calendar" :show.sync="showSnackbar" action-text="已读"></component-snackbar>

      events: {
        'component-snackbar-action' () {
          window.alert('component-snackbar-action')
        }
      }
      </textarea>
    </example-code>
  </div>
</template>

<script>
import snackbar from 'vue-material-ui/src/snackbar/snackbar'
import code from '../example-code'

export default {
  name: 'example-snackbar',
  data () {
    return {
      showSnackbar: false
    }
  },
  events: {
    'component-snackbar-action' () {
      window.alert('component-snackbar-action')
    }
  },
  components: {
    'component-snackbar': snackbar,
    'example-code': code
  }
}
</script>

<style lang="scss">
</style>
