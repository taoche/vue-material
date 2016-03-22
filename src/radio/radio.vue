<template>
<div class="radio"
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
export default {
  props: {
    name : {
      type : String
    },
    activeName: {
      type : String
    },
    state: {
      type: String
    },
    eventName: {
      type    : String,
      default : 'radio-click'
    }
  },
  methods:{
    changeState () {
      if (this.state === 'disabled') return false

      this.activeName = this.name
      this.$dispatch(this.eventName, this.name)
    }
  }
}
</script>
