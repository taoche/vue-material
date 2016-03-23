<template>
<header class="date-header">
  <div class="date-year">
    <h4 @click="changeYearSelect" :class="{
      'active':changeSelectType,
      'ani-up'   : turnType==='up' && modifyYear,
      'ani-down' : turnType==='down' && modifyYear}">{{selectedInfo.year}}</h4>
  </div>

  <div class="date">
    <h2 @click="changeMonthSelect" :class="{
        'active'   : !changeSelectType,
        'ani-up'   : turnType==='up',
        'ani-down' : turnType==='down'}">{{selectedInfo.day}}, {{selectedInfo.month}} {{selectedInfo.date}}</h2>
  </div>

</header>
</template>

<script>
export default {
  name: 'date-pick-header',
  props: ['changeSelectType', 'selectedInfo'],

  data () {
    return {
      turnType: null
    }
  },

  watch: {
    selectedInfo (newVal, oldVal) {
      let newValDate = [newVal.year, newVal.month, newVal.date].join('')
      let oldValDate = [oldVal.year, oldVal.month, oldVal.date].join('')

      this.modifyYear = newVal.year !== oldVal.year

      if (newValDate > oldValDate) {
        this.turnType = 'down'
      } else {
        this.turnType = 'up'
      }
    }
  },

  ready () {
    this.animationEndFn()
  },

  methods: {
    changeYearSelect () {
      this.changeSelectType = true
    },

    changeMonthSelect () {
      this.changeSelectType = false
    },

    animationEndFn () {
      let $target = this.$el.querySelector('h2')

      $target.addEventListener('animationend', (event) => {
        event.target.className = ''
        this.turnType = null
      })
    }
  }
}
</script>

<style lang="scss">
.date-picker {
  .date-header {
    height: 72px;
    padding: 20px;

    text-align: left;
    background: #009688;
    h4,
    h2 {
      color: rgba(#fff, .7);
      cursor: pointer;
    }
    h4 {
      font-weight: 400;

      margin: 0;
    }
    .date-year {
      overflow: hidden;

      height: 16px;
    }
    .date {
      overflow: hidden;

      height: 40px;
      margin: 15px 0 0 0;
      h2 {
        font-size: 36px;

        margin: 0;
      }
    }
    .ani-up {
      animation: runUp .4s;
    }
    .ani-down {
      animation: runDown .4s;
    }
    .active {
      color: #fff;
    }
  }
}

@-webkit-keyframes runUp {
  0% {
    -webkit-transform: translateY(-20px);
  }
  100% {
    -webkit-transform: translateY(0);
  }
}

@-webkit-keyframes runDown {
  0% {
    -webkit-transform: translateY(20px);
  }
  100% {
    -webkit-transform: translateY(0);
  }
}
</style>
