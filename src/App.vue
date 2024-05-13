<script lang="ts" setup>
import { onMounted } from 'vue';
import Bg from './components/bg.vue'

  function redir(url: string)
{
	window.location.href = url;
}

const cursor = document.querySelector(".cursor");

onMounted(() => {
  const cursor = document.getElementById("cursor")
  const cursorfollow = document.getElementById("cursor-follow")

  document.addEventListener('mousemove', e => {
    cursor?.setAttribute('style', "top: " + (e.pageY - 3) + "px; left: " + (e.pageX - 3) + "px;");
    cursorfollow?.setAttribute('style', "top: " + (e.pageY - 25) + "px; left: " + (e.pageX - 25) + "px;");
  })
})

</script>

<template>
  <v-app>
    
    <v-main>
      <Bg />
      <router-view v-slot="{Component}">
			<transition name="slide" mode="out-in">
				<component :is="Component" :key="$route.path"></component>
			</transition>
		</router-view>

      <div id="cursor" class="cursor"></div>
      <div id="cursor-follow" class="cursor-follow"></div>

      <!-- <v-card style="width: 500px;"> -->
        <div style="position: fixed; z-index: 1009; top: 0; right: 0;">
    <v-layout>
      <v-navigation-drawer
        location="right"
        color="#0B0C10"
        permanent
      >
        <template v-slot:prepend>
          <!-- <v-list color="transparent">

            <v-list-item
            lines="two"
            prepend-avatar="/Rina2.png"
            subtitle="Logged in"
            title="Rina Rai"
            ></v-list-item>
          </v-list> -->
          </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item @click="redir('/#')" prepend-icon="mdi-home-city" title="Home" value="home" style="cursor: none;"></v-list-item>
          <v-list-item @click="redir('/blog')" prepend-icon="mdi-book-open-page-variant" title="Blog" value="blog" style="cursor: none;"></v-list-item>
          <v-list-item @click="redir('/#resume')" prepend-icon="mdi-account" title="Resume" value="resume" style="cursor: none;"></v-list-item>
          <v-list-item @click="redir('/contact')" prepend-icon="mdi-cellphone-text" title="Contact Me" value="contact" style="cursor: none;"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh;"></v-main>
    </v-layout>
    </div>
  <!-- </v-card> -->
  
    </v-main>
  </v-app>
</template>

<style>
html {
	overflow-y: auto;
	scroll-behavior: smooth;
	/* overflow: hidden; */
	scrollbar-width: none;  /* Firefox */
	-ms-overflow-style: none;  /* IE and Edge */
}

body {
  cursor: none;
}

html::-webkit-scrollbar {
    display: none;
}

.cursor {
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 50%;
  /* border: 1px solid white;
  border-radius: 50%; */
  position: absolute;
  z-index: 1010;
  pointer-events: none;
  /* transition-duration: 200ms;
  transition-timing-function: ease-out; */
  /* animation: cursorAnim .5s infinite alternate; */
}

.cursor-follow {
  width: 50px;
  height: 50px;
  border: 1px solid white;
  border-radius: 50%;
  position: absolute;
  z-index: 1010;
  pointer-events: none;
  /* transition-duration: 50ms; */
  transition-timing-function: ease-out;
  animation: cursorAnim .5s infinite alternate;
}

@keyframes cursorAnim {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(.7);
  }
}

.content {
  border-radius:.25em;
  left: 0;
  top: 0;
  width: 70vw;
  position:relative;
  text-align:center;
}

h1 {
  font-size: 5em;
  font-family: sans-serif;
  text-transform: uppercase;
}

h3 {
  font-size: 0.95em;
  font-family: sans-serif;
  /* text-transform: uppercase; */
}

.flex-center {
	display: flex;
	justify-content: center;
	align-items: center;
}

.flex-column {
	display: flex;
	flex-direction: column;
}

.flex-row {
	display: flex;
	flex-direction: row;
}

.flex-between {
	display: flex;
	justify-content: space-between;
}

.flex-start {
	display: flex;
	justify-content: start;
	align-items: center;
}

.flex-end {
	display: flex;
	justify-content: end;
	align-items: center;
}

/* transitions */
.slide-enter-active,
.slide-leave-active {
	transition: opacity 1s, transform 1s;
}

.slide-enter-from
{
	opacity: 0;
	transform: translateX(30%);
}

.slide-leave-to {
	opacity: 0;
	transform: translateX(-30%);
}
</style>
