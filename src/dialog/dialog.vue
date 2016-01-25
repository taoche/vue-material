<template>
<div class="dialog-mask" v-if="show" transition="dialog" @click.stop>
  <div class="dialog-wrapper">
    <div class="dialog-container shadow--4dp">
      <span class="dialog-close" @click.stop="show = false">
        <svg width="20px" height="20px" viewPort="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="12" x2="12" y2="1" stroke="#666666" stroke-width="2"/>
          <line x1="1" y1="1" x2="12" y2="12" stroke="#666666" stroke-width="2"/>
        </svg>
      </span>
      <div class="dialog-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang='scss'>
.dialog-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;

  display: table;

  width: 100%;
  height: 100%;

  transition: opacity .3s ease;

  background-color: rgba(0, 0, 0, .5);
  .dialog-wrapper {
    display: table-cell;

    transform: translate3d(0px, 0px, 0px);
    vertical-align: middle;
    .dialog-container {
      width: 500px;
      height: 300px;

      position: relative;
      margin: 0 auto;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: all .3s ease;

      border-radius: 2px;
      background-color: #fff;
      .dialog-close {
        position: absolute;
        z-index: 1000;
        top: 8px;
        right: 5px;

        cursor: pointer;
        transition: all .3s;
        svg:hover {
          line {
            stroke: #888;
          };
        }
      }
    }
  }
  &.dialog-enter,
  &.dialog-leave {
    opacity: 0;
    .dialog-container {
      transform: scale(1.1);
    }
  }
}
</style>
