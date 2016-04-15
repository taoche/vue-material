<template>
<div class="component-dialog" :class="{'is-modal': isModal}" transition="dialog" @click="dialogMaskHandle">
  <div class="dialog-wrap">
    <div class="dialog-container">
      <div class="dialog-content">
        <slot name="content"></slot>
      </div>
      <div class="dialog-actions">
        <slot name="footer">
          <component-button @click="sureHandle">
            <span slot="content">确认</span>
          </component-button>
          <component-button @click="cancelHandle">
            <span slot="content">取消</span>
          </component-button>
        </slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'component-dialog',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    isModal: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    hiddenDialog () {
      this.show = false
    },
    dialogMaskHandle (event) {
      if (event.target.classList.contains('dialog-wrap')) {
        this.hiddenDialog()
      }
    },
    cancelHandle () {
      this.$dispatch('component-dialog-cancel')
      this.hiddenDialog()
    },
    sureHandle () {
      this.$dispatch('component-dialog-sure')
      this.hiddenDialog()
    }
  },
  components: {
    'component-button': require('../buttons/buttons')
  }
}
</script>

<style lang="scss">
.component-dialog {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  display: table;
  width: 100%;
  height: 100%;
  transition: opacity .3s ease;
  &.is-modal {
    background-color: rgba(0, 0, 0, .15);
  }
  .dialog-wrap {
    display: table-cell;
    vertical-align: middle;
    .dialog-container {
      position: relative;
      margin: 0 auto;
      padding: 14px;
      transition: all .3s ease;
      border-radius: 2px;
      background-color: #fff;
      box-shadow: 0 9px 46px 8px rgba(0, 0, 0, .14), 0 11px 15px -7px rgba(0, 0, 0, .12), 0 24px 38px 3px rgba(0, 0, 0, .2);

      justify-content: center;
      align-items: center;
      .dialog-content {
        padding: 20px 24px 24px 24px;
        color: rgba(0,0,0, .54);
      }
      .dialog-actions {
        display: flex;
        flex-direction: row-reverse;

        flex-wrap: wrap;
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
