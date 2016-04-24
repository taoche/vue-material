<template>
<div class="component-layout">
  <div class="layout-wrap">
    <slot name="content"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'component-layout'
}
</script>

<style lang="scss">
.component-layout {
  position: fixed;
  z-index: 0;
  top: 0;
  width: 200px;
  height: 100%;
  .layout-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
