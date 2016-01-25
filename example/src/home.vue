<template>
<div class="home">
  <h3>Vue Material UI</h3>
  <p>目前还不是很完善....</p>

  <h3>如何使用</h3>

  <example-code>
    <textarea>
    npm install lancer-css --save (这是依赖的CSS样式库)
    npm install vue-material-ui --save
    </textarea>
  </example-code>
</div>
</template>

<script>
import code from './example-code'
export default {
  name: 'home',

  components: {
    'example-code': code
  }
}
</script>
