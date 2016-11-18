<template>
<div class="component-input">
  <input class="input" required
    v-model="value"
    :type="type"
    :placeHolder="hint"
    :readonly="isReadOnly"
    :disabled="isDisabled"
    :class="{error: error, disabled: isDisabled}"/>
  <span class="bar"></span>
</div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isReadOnly: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    error: {
      type: Boolean,
      default: false
    },
    hint: {
      type: String
    }
  }
}
</script>

<style lang="scss">
%bar {
  width: 50%;
  border-bottom: 0;
}

.component-input {
  position: relative;
  display: inline-block;
  .input {
    font-size: 16px;
    line-height: 32px;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    padding-bottom: 1px;
    padding-left: 10px;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    outline: none;
    background: none;
    &::-webkit-input-placeholder {
      font-size: 12px;
      color: rbga(0,0,0,.38);
    }
    &.error {
      & ~ .bar:before,
      & ~ .bar:after {
        background: #f44b45;

        @extend %bar
      }
    }
    &:disabled,
    &.disabled {
      cursor: not-allowed;
      color: #b2b2b2;
      border-bottom-style: dotted;
    }
    &:not([readonly]):not(.error):focus ~ .bar:before,
    &:not([readonly]):not(.error):focus ~ .bar:after {
      background: #3c80f6;

      @extend %bar
    }
    &:not([readonly]):not(.error):valid ~ .bar:before,
    &:not([readonly]):not(.error):valid ~ .bar:after {
      background: #42b68a;

      @extend %bar
    }
  }
  .bar {
    position: relative;
    display: block;
    &:before,
    &:after {
      position: absolute;
      bottom: .5px;
      width: 0;
      height: 2px;
      content: '';
      transition: .2s ease all;
      background: #3c80f6;
    }
    &:before {
      left: 50%;
    }
    &:after {
      right: 50%;
    }
  }
}
</style>
