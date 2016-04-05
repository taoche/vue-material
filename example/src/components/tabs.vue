<template>
  <div class="example-tabs">
    <h3>基础使用</h3>
    <component-tabs :tabs="tabs" :active-tab-index.sync="activeTabIndex"></component-tabs>

    <code class="example">
      配合 Vue ':is' 使用 可以很简单的实现.. tab切换， 简单且优雅 <br>
      动态数据 : {{activeTabIndex | json}}
    </code>

    <example-code>
      <textarea>
      <component-tabs :tabs="tabs" :active-tab-index.sync="activeTabIndex"></component-tabs>

      data () {
        return {
          activeTabIndex: 1,
          tabs: ['测试一', '测试二', '测试三', '测试四', '测试五']
        }
      },
      events: {
        'component-tabs-changed' (index) {
          console.log(index)
        }
      }
      </textarea>
    </example-code>
  </div>
</template>

<script>
import tabs from 'vue-material-ui/src/tabs/tabs'
import code from '../example-code'

export default {
  name: 'example-tabs',
  data () {
    return {
      activeTabIndex: 1,
      tabs: ['测试一', '测试二', '测试三', '测试四', '测试五']
    }
  },
  components: {
    'component-tabs': tabs,
    'example-code': code
  }
}
</script>

<style lang="scss">
</style>
