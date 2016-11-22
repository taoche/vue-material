<template>
<div class="component-radio-group"
  :class="{'active': active, 'disabled': disabled, 'vertical': vertical}">
  <div class="component-radio-group-label" v-if="label">{{label}}</div>

  <div class="component-radio-group-options-box">
    <component-radio
      v-for="option of options"
      :name="name"
      :model.sync="value"
      :label="option.text || option"
      :value="option.value || option || ''"
      :disabled="disabled || option.disabled"
      :label-right="labelRight">
    </component-radio>
  </div>
</div>
</template>

<script>
import componentRadio from './radio'

export default {
  name: 'component-radio-group',
  components: {
    componentRadio
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    label: String,
    labelRight: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
