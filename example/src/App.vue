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
    'cheader': cheader,
    'sidebar': sidebar
  }
}
</script>

<style lang="scss">
.app {
   padding-top: 40px;
  &>.header {
    width: 100%;
    z-index:99;
    height: 60px;
    background: #fff;
    position: fixed;
    top:0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
      padding-left: 30px;
    }
    nav {
      li{
        display: inline-block;
        margin: 0 20px;
      }
    }
    a{
      color: rgba(0,0,0,.56);
    }
  }
  &>.main{
    display: flex;
    padding: 60px 35px;

    .sidebar {
      position: fixed;

      span{
        font-size: 18px;
        color:#7f8c8d;

        &.active{
          color:#42b983;
        }
      }
      ul{
        padding-left: 20px;
        line-height: 30px;
        a{
          color:#34495e;
          &.active{
            color:#42b983;
          }
        }
      }
    }
    .page-main{
      margin: 0 auto;
      width: 60%;
    }
  }
  h3{
    margin: 3em 0 1.2em;

    &:first-child {
      margin-top: 8px;
    }
  }
  h1, h2, h3, h4, strong {
    font-weight: 600;
    color: #2c3e50;
  }
  .example{
    display: block;
    margin: 10px 0;
    padding: 5px 20px;
  }
}
</style>
