<template>
 <svg class="component-circular" height="50" width="50">
   <circle class="path" cx="25" cy="25.2" r="19.9" fill="none" stroke-width="4" stroke-miterlimit="10"/>
 </svg>
</template>

<script>
</script>

<style lang='scss'>
.component-circular {
  position: absolute;
  top: 20%;
  left: 50%;
  width: 50px;
  height: 50px;
  margin-left: -25px;
  animation: rotate 2s linear infinite;
  .path {
    animation: dash 1.5s ease-in-out infinite,
    color 6s ease-in-out infinite;

    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    stroke: #3f88f8;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -124;
  }
}

@keyframes color {
  0% {
    stroke: #3f88f8;
  }
  20% {
    stroke: #3f88f8;
  }
  25% {
    stroke: #dd413b;
  }
  45% {
    stroke: #dd413b;
  }
  50% {
    stroke: #f6ae2e;
  }
  70% {
    stroke: #f6ae2e;
  }
  75% {
    stroke: #259a5d;
  }
  95% {
    stroke: #259a5d;
  }
}
</style>
