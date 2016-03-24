<template>
<div class="component-input">
  <input class="m-input" v-model="value"
    :type="type"
    :placeHolder="hint"
    :readonly="isReadOnly"
    :class="{error: error, disabled: isDisabled}"/>
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
.component-input {
  position: relative;
  display: inline-block;
  .m-input {
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
    &:focus,
    &:hover {
      padding-bottom: 0;
      border-bottom: 2px solid #3c80f6;
    }
    &::-webkit-input-placeholder {
      font-size: 12px;
      color: rbga(0,0,0,.38);
    }
    &.error {
      padding-bottom: 0;
      border-bottom: 2px solid #f44b45;
    }
    &:disabled,
    &.disabled {
      cursor: not-allowed;
      color: #b2b2b2;
      border-bottom-style: dotted;
    }
  }
}
</style>
