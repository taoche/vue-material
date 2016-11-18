<template>
<div class="component-radio">
  <div class="radio-label" :class="{'label-left': !labelRight, 'label-right': labelRight}" v-if="label">
    <slot>
      <span>{{label}}</span>
    </slot>
  </div>

  <div class="radio"
    v-ripple.static
    @click="changeState"
    :class="{
      active: value === model,
      disabled: disabled }">
    <input class="radio-tag" type="radio"
      :name="name"
      :value="value">
    <div class="radio-bd">
      <span class="radio-indicator"></span>
    </div>
  </div>
</div>
</template>

<script>
import ripple from 'directives/ripple'

export default {
  props: {
    label: String,
    labelRight: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    value: String,
    disabled: {
      type: Boolean,
      default: false
    },
    onChange: Function
  },
  directives: {
    ripple
  },
  methods: {
    changeState () {
      if (this.disabled) return false
      this.model = this.value
    }
  }
}
</script>

<style lang="scss">
.component-radio {
  display: inline-block;
  .radio-label {
    display: inline-block;
    &.label-left {
      float: left;
      margin-right: 6px;
    }
    &.label-right {
      float: right;
      margin-left: 6px;
    }
  }
  .radio {
    vertical-align: text-top;
    .ripple {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 4px;
      height: 4px;
      margin: -2px;
      background: rgba(#000, .5);
      border-radius: 50%;
      opacity: 0;
      transform: scale(12);
      animation: radio-ripple .8s;
    }
    @keyframes radio-ripple {
      from {
        opacity: .5;
        transform: scale(0);
      }
      to {
        opacity: 0;
        transform: scale(12);
      }
    }
  }
}
</style>
