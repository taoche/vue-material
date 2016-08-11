<template>
  <div class="panel shadow--{{dp}}dp">
    <slot name="content">
      default
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    dp: {
      type: String,
      default: '2'
    }
  }
}
</script>
