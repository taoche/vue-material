<template>
  <div class="select-year">
    <ol>
      <li v-for="year in yearArr" track-by="$index"
        :class="{'active': year === selectedYear}"
        @click="changeActiveYear(year)">{{year}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'pick-year',
  props: ['yearArr', 'current', 'selectedDate'],

  computed: {
    selectedYear () {
      return this.selectedDate.getFullYear()
    }
  },
  watch: {
    selectedDate () {
      this.$nextTick(() => {
        this.positionActive()
      })
    }
  },

  ready () {
    this.positionActive()
  },

  methods: {
    changeActiveYear (year) {
      this.current = this.selectedDate = new Date(this.selectedDate.setYear(year))
    },
    positionActive () {
      let $target = this.$el.querySelector('.active')
      this.$el.scrollTop = ($target.offsetTop - this.$el.offsetTop) - $target.offsetHeight * 3
    }
  }
}
</script>

<style lang="scss">
.date-picker {
  .select-year {
    overflow: hidden;
    overflow-y: scroll;
    height: 290px;
    padding-top: 10px;
    &::-webkit-scrollbar {
      display: none;
    }
    ol {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        font-size: 18px;
        padding: 6px 0;
        cursor: pointer;
        &.active {
          font-size: 22px;
          font-weight: 800;
          margin: 5px 0;
          color: #009485;
        }
      }
    }
  }
}
</style>
