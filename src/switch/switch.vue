<template>
  <div class="component-switch"
    @click.stop="toggleSwitchHandle"
    :class="{'active': isCheck,
    'disabled': isDisabled}">
    <a class="switch-pole"></a>
    <span class="switch-thumb"></span>
  </div>
</template>

<script>
export default {
  name : 'component-switch',
  props : {
    isCheck : {
      type    : Boolean,
      default : false
    },
    isDisabled : {
      type    : Boolean,
      default : false
    }
  },
  methods: {
    toggleSwitchHandle () {
      this.isCheck = !this.isCheck
      this.$dispatch('component-switch-toggle', this.isCheck)
    }
  }
}
</script>
