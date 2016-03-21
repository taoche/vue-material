<template>
<li class="list-item" v-for="item in listData">
  <span class="list-item-primary-content">
  <i class="icon-star"></i>
    {{item.title}}
  </span>

  <span class="list-item-secondary-action">
    <slot name="action"></slot>
  </span>
</li>
</template>

<script>
export default {
  props: {
     listData : null
  }
}
</script>
