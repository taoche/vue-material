<template>
<button class="component-button btn btn--{{theme}} {{state}}" :type="type"
  :disabled="isDisabled" @click.stop="clickHandle" @mousedown="mousedownHandle">
  <slot name="content"><slot>
</button>
</template>

<script>
import appendRipple from 'utils/appendRipple'

export default {
  name: 'component-button',
  props: {
    theme: {
      type: String,
      default: 'basis'
    },
    state: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'button'
    },
    eventName: {
      type: String,
      default: 'btn-click'
    }
  },
  computed: {
    isDisabled () {
      return this.state === 'disabled'
    }
  },
  methods: {
    clickHandle () {
      this.$dispatch(this.eventName)
    },
    mousedownHandle (event) {
      let x = event.pageX - event.currentTarget.offsetLeft
      let y = event.pageY - event.currentTarget.offsetTop

      appendRipple(this.$el, x, y)
    }
  }
}
</script>

<style lang="scss">
.component-button {
  overflow: hidden;
  .ripple {
    position: absolute;
    display: block;
    width: 4px;
    height: 4px;
    transform: scale(100);
    animation: button-ripple 1.4s;
    opacity: 0;
    border-radius: 50%;
    background: #fff;
  }
}

@keyframes button-ripple {
  from {
    transform: scale(0);
    opacity: .5;
  }
  to {
    transform: scale(100);
    opacity: 0;
  }
}
</style>
