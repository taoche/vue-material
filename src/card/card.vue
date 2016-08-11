<template>
<div class="card-wrapper">
  <div class="card-head" v-if="cardData.cardHead" >
    <h3>{{cardData.cardHead.title}}</h3>
    <p>{{cardData.cardHead.subTitle}}</p>
  </div>

  <div class="card-media" v-if="cardData.cardMedia">
    <img :src="cardData.cardMedia.imgSrc">
    <div class="card-head" v-if="cardData.cardMedia.head">
      <h3>{{cardData.cardMedia.title}}</h3>
      <p>{{cardData.cardMedia.subTitle}}</p>
    </div>
  </div>

  <div class="card-text" v-if="cardData.cardText">
    <p>{{cardData.cardText.content}}</p>
  </div>

  <slot name="card-action"></slot>
</div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss">
.card-wrapper {
  width: 100%;
  height: auto;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 6px rgba(0, 0, 0, .12), 0 1px 4px rgba(0, 0, 0, .24);
  .card-head {
    box-sizing: border-box;
    width: 100%;
    padding: 16px;
    h3 {
      font-size: 24px;
      margin: 0;
      color: rgba(0, 0, 0, .87);
    }
    p {
      font-size: 14px;
      margin: 0;
      color: rgba(0, 0, 0, .54);
    }
  }
  .card-media {
    position: relative;
    img {
      display: block;
      width: 100%;
      margin: 0;
      border: 0;
    }
    .card-head {
      position: absolute;
      bottom: 0;
      left: 0;
      color: #fff;
      background: rgba(0, 0, 0, .54);
      h3 {
        color: #fff;
      }
      p {
        color: #fff;
      }
    }
  }
  .card-text {
    font-size: 14px;
    line-height: 24px;
    box-sizing: border-box;
    padding: 16px;
    color: rgba(0, 0, 0, .87);
    p {
      margin: 0;
    }
  }
  .card-action {
    display: flex;
    box-sizing: border-box;
    padding: 8px;

    justify-content: space-between;
  }
}
</style>
