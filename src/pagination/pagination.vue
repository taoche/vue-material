<template>
<div class="component-pagination" v-if="pageLength > 1">
  <ul class="pagination">

    <li class="prev" :class="{disabled:currentPage === 1}"
      @click.stop="prevPage">
      <svg width="8px" height="15px" viewBox="0 0 50 80" xml:space="preserve">
        <polyline fill="none" stroke="#4e647b" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375"/>
      </svg>
    </li>

    <li v-for="item in pageArr" track-by="$index"
      :class.stop="{active: item.isCurrent,
        'not-page': item.notPage}"
      @click="selectPage(item.page,$event)">
      <a href="javascript:void(0)">{{item.page}}</a>
    </li>

    <li class="next" :class="{disabled:currentPage  === pageLength}"
      @click.stop="nextPage">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8px" height="15px" viewBox="0 0 50 80" xml:space="preserve">
        <polyline fill="none" stroke="#4e647b" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8"/>
      </svg>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'component-pagination',
  props: {
    pageLength: {
      type: Number,
      required: true
    },
    screenPagination: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    },
    valve: {
      type: Number,
      default: 5
    }
  },
  computed: {
    pageArr () {
      let pageArr = []

      if (this.pageLength <= this.screenPagination) {
        for (let i = 1, len = this.pageLength; i <= len; i++) {
          pageArr.push({
            page: i,
            isCurrent: i === this.currentPage
          })
        }
      } else {
        if (this.currentPage <= this.valve) {
          for (let i = 1, len = this.currentPage; i <= len; i++) {
            pageArr.push({
              page: i,
              isCurrent: i === len
            })
          }
        } else {
          pageArr.push({
            page: 1
          }, {
            page: 2
          }, {
            page: '...',
            notPage: true
          })

          // 倒数3个数
          for (let i = 2, len = this.currentPage; i >= 0; i--) {
            pageArr.push({
              page: len - i,
              isCurrent: !i
            })
          }
        }

        if (this.currentPage > this.pageLength - this.valve) {
          for (let i = 1, len = this.pageLength; i <= len; i++) {
            if (i > this.currentPage) {
              pageArr.push({
                page: i
              })
            }
          }
        } else {
          pageArr.push({
            page: this.currentPage + 1
          }, {
            page: this.currentPage + 2
          }, {
            page: '...',
            notPage: true
          }, {
            page: this.pageLength - 1
          }, {
            page: this.pageLength
          })
        }
      }

      return pageArr
    }
  },

  methods: {
    selectPage (index, event) {
      if (event.target.parentNode.classList.contains('not-page') ||
      this.currentPage === index) return false

      this.currentPage = index

      this.$dispatch('pagination-change', index)
    },

    prevPage (event) {
      if (this.currentPage === 1) return false
      this.currentPage --
    },

    nextPage (event) {
      if (this.currentPage === this.pageLength) return false
      this.currentPage ++
    }
  }
}
</script>

<style lang="scss">
.component-pagination {
  margin-top: 20px;
  svg {
    cursor: pointer;
    -webkit-user-select: none;
    vertical-align: middle;
    &:hover {
      polyline {
        stroke: rgba(0,0,0,.87);
      }
    }
  }
  .disabled {
    svg {
      cursor:not-allowed;
      polyline {
        stroke: rgba(0,0,0,.3);
      }
    }
  }
}
</style>
