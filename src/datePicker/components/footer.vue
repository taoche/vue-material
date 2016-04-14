<template>
  <footer class="date-footer">
    <button @click="datePickerHide">CANCEL</button>
    <button @click="datePickersure">OK</button>
  </footer>
  </div>
</template>

<script>
export default {
  name: 'date-pick-footer',
  methods: {
    datePickerHide () {
      this.$dispatch('date-picker-hide')
    },
    datePickersure () {
      this.$dispatch('date-picker-sure')
    }
  }
}
</script>

<style lang="scss">
.date-picker {
  .date-footer {
    padding: 15px 10px 10px 10px;
    text-align: right;
    button {
      padding: 8px 20px;
      cursor: pointer;
      color: red;
      color: #0884ce;
      border: none;
      background: transparent;
      &:hover {
        animation: btn-fade-in .5s ease both;
        color: #fff;
      }
      &:focus {
        outline: none;
      }
    }
  }
}
@-webkit-keyframes btn-fade-in {
  0% {
    background: rgba(lighten(#0884ce, 5%), .1);
  }
  100% {
    background: rgba(lighten(#0884ce, 5%), .5);
  }
}
</style>
