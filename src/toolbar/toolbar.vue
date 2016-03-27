<template>
  <div class="component-toolbar">
    <div class="toolbar-left">
      <slot name="left"></slot>
    </div>
    <div class="toolbar-center">
      <slot name="center"></slot>
    </div>
    <div class="toolbar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'component-toolbar'
}
</script>

<style lang="scss">
.component-toolbar {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 0 0 0 8px;
  align-items: center;
  justify-content: space-between;

  %items-common {
    display: flex;

    align-items: center;
  }
  .toolbar-left {
    @extend %items-common;
  }
  .toolbar-center {
    @extend %items-common;
    flex: 1;
  }
  .toolbar-right {
    @extend %items-common;
    justify-content: flex-end;
    button {
      margin-left: 10px;
    }
  }
}
</style>
