<template>
<div id="app" class="app">
  <cheader></cheader>
  <div class="main">
    <sidebar></sidebar>
    <router-view keep-alive class="page-main"></router-view>
  </div>
</div>
</template>

<script>
import cheader from './header'
import sidebar from './sidebar'

export default {
  components: {
    cheader,
    sidebar
  }
}
</script>

<style lang="scss">
.app {
  padding-top: 40px;
  & > .header {
    position: fixed;
    top: 0;
    z-index: 99;
    display: flex;
    width: 100%;
    height: 60px;
    background: #fff;

    justify-content: space-between;
    align-items: center;
    .logo {
      padding-left: 30px;
    }
    nav {
      li {
        display: inline-block;
        margin: 0 20px;
      }
    }
    a {
      color: rgba(0,0,0,.56);
    }
  }
  & > .main {
    display: flex;
    padding: 60px 35px;
    .sidebar {
      position: fixed;
      span {
        font-size: 18px;
        color: #7f8c8d;
        &.active {
          color: #42b983;
        }
      }
      ul {
        padding-left: 20px;
        line-height: 30px;
        a {
          color: #34495e;
          &.active {
            color: #42b983;
          }
        }
      }
    }
    .page-main {
      width: 60%;
      margin: 0 auto;
    }
  }
  h3 {
    margin: 3em 0 1.2em;
    &:first-child {
      margin-top: 8px;
    }
  }
  h1, h2, h3, h4, strong {
    font-weight: 600;
    color: #2c3e50;
  }
  .example {
    display: block;
    padding: 5px 20px;
    margin: 10px 0;
  }
}
</style>
