<template>
<button class="btn btn--{{theme}} {{state}}" :type="type"
  :disabled="isDisabled"
  @click.stop="clickHandle">
  <slot name="content" is="my-component"><slot>
</button>
</template>

<script>
export default {
  name: 'component-button',
  props: {
    theme: {
      type    : String,
      default : 'basis'
    },
    state: {
      type    : String,
      default : ''
    },
    type: {
      type    : String,
      default : 'button'
    },
    eventName: {
      type    : String,
      default : 'btn-click'
    }
  },
  computed : {
    isDisabled () {
      return this.state === 'disabled'
    }
  },
  methods:{
    clickHandle () {
      this.$dispatch(this.eventName)
    }
  }
}
</script>
