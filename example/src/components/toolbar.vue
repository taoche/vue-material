a<template>
  <div class="example-toolbar">
    <h3>基础使用</h3>
    <component-toolbar></component-toolbar>
  </div>
</template>

<script>
import toolbar from 'src/toolbar/toolbar'
import code from '../example-code'

export default {
  name: 'example-toolbar',
  data () {
    return {
    }
  },
  components: {
    'component-toolbar': toolbar,
    'example-code': code
  }
}
</script>

<style lang="scss">
</style>
