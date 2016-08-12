<template>
<div class="component-radio radio"
  v-ripple.static
  @click="changeState"
  :class="{active: activeName === name,
    disabled: state === 'disabled'}">
  <input class="radio-tag" type="radio">
  <div class="radio-bd">
    <span class="radio-indicator"></span>
  </div>
</div>
</template>

<script>
import ripple from 'directives/ripple'

export default {
  props: {
    name: {
      type: String
    },
    activeName: {
      type: String
    },
    state: {
      type: String
    },
    onChange: Function
  },
  directives: {
    ripple: ripple
  },
  methods: {
    changeState () {
      if (this.state === 'disabled') return false

      this.activeName = this.name
      this.onChange && this.onChange(this.name)
    }
  }
}
</script>


<style lang="scss">
.component-radio {
  .ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 4px;
    height: 4px;
    margin: -2px;
    transform: scale(12);
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
      transform: scale(12);
      opacity: 0;
    }
  }
}
</style>
