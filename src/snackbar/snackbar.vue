<template>
<div class="component-snackbar shadow--2dp" transition="snackbar"
  @mouseenter="mouseenterHandle" @mouseleave="mouseleaveHandle">
  <span class="message">{{msg}}</span>
  <span class="action" v-if="actionText" @click="snackbarActionHandle">{{actionText}}</span>
</div>
</template>

<script>
export default {
  name: 'component-snackbar',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    msg: {
      type: String,
      required: true
    },
    actionText: null
  },
  data () {
    return {
      snackbarTimer: null
    }
  },
  ready () {
    this.setTimeoutHideen()
  },
  methods: {
    mouseenterHandle () {
      clearTimeout(this.snackbarTimer)
    },
    mouseleaveHandle () {
      this.setTimeoutHideen()
    },
    snackbarActionHandle () {
      this.$dispatch('component-snackbar-action')
      this.show = false
    },
    setTimeoutHideen () {
      this.snackbarTimer = setTimeout(() => {
        this.show = false
      }, 5000)
    }
  }
}
</script>

<style lang="scss">
.component-snackbar {
  position: fixed;
  bottom: 0;
  left: 50%;
  display: flex;
  min-width: 288px;
  max-width: 568px;
  padding: 14px 24px;
  transform: translate(-50%);
  color: #fff;
  border-radius: 2px;
  background-color: #323232;

  justify-content: space-between;
  .action {
    margin-left: 48px;
    cursor: pointer;
  }
  &.snackbar-transition {
    transition: all .3s ease-in-out;
  }
  &.snackbar-enter,
  &.snackbar-leave {
    bottom: -50px;
  }
}
</style>
