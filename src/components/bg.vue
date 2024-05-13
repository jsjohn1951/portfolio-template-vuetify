<template>
	<div class="bg"></div>
  	<div class="bg bg2"></div>
  	<div class="bg bg3"></div>
</template>

<style scoped>
html {
  height:100%;
}

body {
  margin:0;
}

.bg {
  animation:slide 10s ease-in-out infinite alternate;
  background-image: linear-gradient(-90deg, #317788 30%, #0B0C10 70%);
  bottom:0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-50%;
  top:0;
}

.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:4s;
}

.bg3 {
  animation-duration:5s;
}

@keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}

</style>