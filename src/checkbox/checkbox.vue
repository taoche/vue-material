<template>
<div class="component-checkbox checkbox"
  v-ripple.static
  :class="{active: isChecked, disabled: isDisabled}"
  @click="changeState">
  <input class="checkbox-tag" type="checkbox">
  <div class="checkbox-bd">
    <span class="checkbox-indicator"></span>
  </div>
</div>
</template>

<script>
import ripple from 'directives/ripple'

export default {
  name: 'component-checkbox',
  props: {
    isChecked: {
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
    changeState (event) {
      if (this.isDisabled) return false

      this.isChecked = !this.isChecked
      this.onChange && this.onChange(this.isChecked)
    }
  }
}
</script>

<style lang="scss">
.component-checkbox {
  cursor: pointer;
  &.disabled {
    .checkbox-tag {
      display: none;
    }
    .checkbox-bd {
      border: 2px solid #c1c1c1 !important;
      background-color: #c1c1c1;
    }
  }
  .ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 4px;
    height: 4px;
    margin: -2px;
    transform: scale(13);
    animation: checkbox-ripple .8s;
    opacity: 0;
    border-radius: 50%;
    background: rgba(#000, .5);
  }

  @keyframes checkbox-ripple {
    from {
      transform: scale(0);
      opacity: .5;
    }
    to {
      transform: scale(13);
      opacity: 0;
    }
  }
}
</style>
