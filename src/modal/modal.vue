<template>
<div class="modal-mask" v-if="show">
  <div class="modal-wrapper">
    <div class="modal-container shadow--4dp" v-el:container>

      <div class="modal-header">
        <slot name="header">
          default header
        </slot>
      </div>

      <div class="modal-body">
        <slot name="body">
          default body
        </slot>
      </div>

      <div class="modal-footer">
        <slot name="footer">
          <component-buttons><span slot="content">确认</span></component-buttons>
        </slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    show: {
      type : Boolean,
      required : true
    }
  },
  components: {
    'component-buttons' : require('../buttons/buttons')
  }
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;

  display: table;

  width: 100%;
  height: 100%;

  transition: opacity .3s ease;

  background-color: rgba(0, 0, 0, .5);
  .modal-wrapper {
    display: table-cell;

    vertical-align: middle;
  }
  .modal-container {
    width: 400px;
    margin: 0 auto;
    padding-bottom: 22px;

    transition: all .3s ease;

    border-radius: 2px;
    background-color: #fff;
    .modal-header {
      [slot='header'] {
        padding: 10px;
      }
    }
    .modal-body {
      padding: 20px 40px;
    }
    .modal-footer {
      overflow: hidden;

      padding: 3px 22px !important;
    }
  }
}
</style>
