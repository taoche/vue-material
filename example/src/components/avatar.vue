<template>
  <div class="example-avatar">
    <component-avatar class="small" :src="imageUrl"></component-avatar>
    <component-avatar :src="imageUrl"></component-avatar>
    <component-avatar class="large" :src="imageUrl"></component-avatar>
    <component-avatar letter="赵"></component-avatar>
    <component-avatar :src="imageUrl"></component-avatar>

    <example-code>
      <textarea>
        <component-avatar class="small"></component-avatar>
        <component-avatar></component-avatar>
        <component-avatar class="large"></component-avatar>
        <component-avatar letter="赵"></component-avatar>
        <component-avatar :src="imageUrl"></component-avatar>
      </textarea>
    </example-code>
  </div>
</template>

<script>
import avatar from 'vue-material-ui/src/avatar/avatar'
import code from '../example-code'
export default {
  name: 'example-avatar',
  data () {
    return {
      imageUrl: 'http://img.wdjimg.com/mms/icon/v1/c/69/4fa19b32a2c59c1558e51c393150f69c_256_256.png'
    }
  },
  components: {
    'component-avatar': avatar,
    'example-code': code
  }
}
</script>

<style>
.component-avatar{
  margin: 0 10px;
}
</style>
