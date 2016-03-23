<template>
  <div class="select-month">
    <span class="arrow arrow-left" :class="{disabled: disableControl('prevMonth')}"
      @click="prevMonth">

      <svg width="8px" height="15px" viewBox="0 0 50 80" xml:space="preserve">
        <polyline fill="none" stroke="#4e647b" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
      </svg>
    </span>

    <span class="date">{{currentInfo.monthName}}  {{currentInfo.year}}</span>

    <span class="arrow arrow-right"
      @click="nextMonth"
      :class="{disabled: disableControl('nextMonth')}">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8px" height="15px" viewBox="0 0 50 80" xml:space="preserve">
        <polyline fill="none" stroke="#4e647b" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" points="
      0.375,0.375 45.63,38.087 0.375,75.8 "/>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: 'pick-month',
  props: ['currentInfo', 'minDate', 'maxDate', 'current'],

  methods: {
    prevMonth (event) {
      if (event.target.classList.contains('disabled')) return false

      this.current = this.addMonth(this.current, -1)
    },

    nextMonth (event) {
      if (event.target.classList.contains('disabled')) return false
      this.current = this.addMonth(this.current, +1)
    },

    disableControl (control) {
      let testDate    = new Date(this.current)
      let addMonthNum = 0

      if (control === 'prevMonth') addMonthNum = -1
      if (control === 'nextMonth') addMonthNum = 1

      return !this.checkIsEnabled(this.addMonth(testDate, addMonthNum))
    },

    checkIsEnabled (date) {
      return  date.setDate(30) > new Date(this.minDate) && date.setDate(1) < new Date(this.maxDate)
    },

    addMonth (date, number) {
      number = number || 1
      date = new Date(date)
      return new Date(date.setMonth(date.getMonth() + number))
    }
  }
}
</script>

<style lang="scss">
.date-picker {
  .select-month {
    display: block;
    display: flex;

    padding: 10px 0 5px 0;

    justify-content: center;
    .date {
      width: 77%;
    }
    .disabled {
      cursor: default;

      box-shadow: 2px -2px #dce0e5 inset;
    }
  }
  .arrow {
    padding: 5px;

    cursor: pointer;
  }
}
</style>
