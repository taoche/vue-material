<template>
<div class="component-checkbox checkbox"
  :class="{active:isChecked, disabled:isDisabled}"
  @click="changeState">
  <input class="checkbox-tag" type="checkbox">

  <div class="checkbox-bd">
    <span class="checkbox-indicator"></span>
  </div>
</div>
</template>

<script>
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
    }
  },
  methods: {
    changeState (event) {
      if (this.isDisabled) {
        return false
      }
      this.isChecked = !this.isChecked
      this.$dispatch('checkbox-state-change', event, this.isChecked)
    }
  }
}
</script>

<style lang="scss">
.component-checkbox {
  &.disabled {
    .checkbox-tag {
      display: none;
    }
    .checkbox-bd {
      border: 2px solid #c1c1c1 !important;
      background-color: #c1c1c1;
    }
  }
}
</style>
