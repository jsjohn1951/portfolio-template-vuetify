<script setup lang="ts">
import { Transition, ref } from 'vue'

const slides = ref([
  'prof.png',
  'Rina2.png',
  'Rina4.png'
		])
</script>

<template>
  <div class="content">
    <v-row>
      <v-col>
        <div style="display: flex; justify-content: center; align-items: center; width: 30vw; height: 100vh; background-color: #0B0C10; left: 0; top: 0; opacity: 1; z-index: 1008;">
          
          <v-carousel
            cycle
            hide-delimiter-background
            :show-arrows="false"
	          style="height: 100vh;"
          >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            cover
            >
          <v-parallax :src="slide" style="height: 100vh; cursor: none;">
	        </v-parallax>
          </v-carousel-item>
          </v-carousel>
  
        </div>
      </v-col>
      <v-col>
        <div
        v-motion
      :initial="{
          opacity: 0,
          // y: 100,
      }"
      :visible="{
        opacity: 1,
        Transition: {
          delay: 1000,
        }
        // y: 0,
      }"
        style="display: flex; flex-direction: column; justify-content: center; align-items: start; height: 100vh;">
          <h1>Rina Rai</h1>
          <v-divider insert style="width: 22em; padding: 10px;"></v-divider>
          <h3>Physician's Assistant | Sales & Marketing | Accountant </h3>
          <div style="height: 20px;"/>
          <p class="font-weight-thin" style="text-align: start;">
            "The best way to find yourself is to
            lose yourself in the service of others."
            <br>
            - Physician Assistant
          </p>
        </div>
      </v-col>
    </v-row>
  </div>

</template>
