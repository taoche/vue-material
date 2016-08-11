<template>
<button class="component-button btn btn--{{theme}} {{state}}"
  v-ripple
  :type="type"
  :disabled="isDisabled"
  @click.stop="clickHandle">
    <slot name="content"><slot>
</button>
</template>

<script>
import ripple from 'directives/ripple'

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
    onClick: Function
  },
  computed: {
    isDisabled () {
      return this.state === 'disabled'
    }
  },
  directives: {
    ripple: ripple
  },
  methods: {
    clickHandle () {
      this.onClick && this.onClick()
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
