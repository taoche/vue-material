<template>
<header class="header shadow--2dp">
  <a class="logo" v-link="'home'">
    <span>Vue Material UI<span>
  </a>

  <nav class="nav">
    <ul>
      <li>
        <a v-link="'home'">首页</a>
      </li>
      <li>
        <a v-link="'avatar'">Components</a>
      </li>
      <li>
        <a href="https://github.com/taoche/vue-material">Github</a>
      </li>
    </ul>
  </nav>
</header>
</template>

<script>
export default {
  name: 'header'
}
</script>
