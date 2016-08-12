<template>
  <div class="component-switch"
    @click.stop="toggleSwitchHandle"
    :class="{'active': isCheck, 'disabled': isDisabled}">
    <a class="switch-pole"></a>
    <span class="switch-thumb" v-ripple.static></span>
  </div>
</template>

<script>
import ripple from 'directives/ripple'

export default {
  name: 'component-switch',
  props: {
    isCheck: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    onChange: Function
  },
  directives: {
    ripple: ripple
  },
  methods: {
    toggleSwitchHandle () {
      if (this.isDisabled) return false

      this.isCheck = !this.isCheck

      this.onChange && this.onChange(this.isCheck)
    }
  }
}
</script>

<style lang="scss">
.component-switch {
  .ripple {
    position: absolute;
    top: 8px;
    left: 8px;
    display: block;
    width: 4px;
    height: 4px;
    transform: scale(15);
    animation: button-ripple 1.4s;
    opacity: 0;
    border-radius: 50%;
    background: rgba(#000, .4);
  }
}

@keyframes button-ripple {
  from {
    transform: scale(0);
    opacity: .5;
  }
  to {
    transform: scale(15);
    opacity: 0;
  }
}
</style>
