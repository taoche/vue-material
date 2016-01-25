<template>
  <div class="example-input">
    <h3>基础使用</h3>
    <component-pagination :page-length="11"></component-pagination>

    <example-code>
      <textarea>
      <component-pagination :page-length="11"></component-input>
      </textarea>
    </example-code>

    <h3>事件</h3>
    <component-pagination :page-length="11" :current-page.sync="currentPage"></component-pagination>

    <code class="example">
      当前页码 : {{currentPage | json}}
    </code>

    <example-code>
      <textarea>
      <component-pagination :page-length="11" :current-page.sync="currentPage"></component-pagination>

      data () {
        return {
          currentPage: 3
        }
      },
      watch: {
        currentPage (index) {
          window.alert(index)
        }
      }
      ----------- OR ------------
      events: {
        'pagination-change' (index) {
          window.alert(index)
        }
      }
      </textarea>
    </example-code>
  </div>
</template>

<script>
import pagination from 'vue-material-ui/src/pagination/pagination'
import code from '../example-code'

export default {
  name: 'example-pagination',
  data () {
    return {
      currentPage: 3
    }
  },
  watch: {
    currentPage (index) {
      window.alert(index)
    }
  },
  components: {
    'component-pagination': pagination,
    'example-code': code
  }
}
</script>

<style lang="scss">

</style>
