<template>
<ul class="sidebar">
  <li>
    <span :class="{'active': !isComponent}">开始使用</span>
    <ul>
      <li><a v-link="{name: 'home', activeClass: 'active'}">Vue Material UI</a></li>
    </ul>
  </li>
  <li>
    <span :class="{'active': isComponent}">components</span>
    <ul>
      <li v-for="item in componentList"><a v-link="{name: item, activeClass: 'active'}">{{item}}</a></li>
    </ul>
  </li>
</ul>
</template>

<script>
const componentList = ['avatar', 'buttons', 'checkbox', 'datePicker', 'dialog', 'input', 'pagination', 'radio', 'search', 'select', 'switch', 'tooltips', 'snackbar', 'tables', 'tabs']

export default {
  name: 'sidebar',
  data () {
    return {
      componentList: componentList,
      isComponent: false
    }
  },
  ready () {
    this.$route.router.afterEach((transition) => {
      this.isComponent = transition.to.name !== 'home'
    })
  }
}
</script>
