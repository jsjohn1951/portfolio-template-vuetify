<script setup lang="ts">
import { ref, Ref } from 'vue'
const loading = ref(false)
const rules = ref([value => checkApi(value)])
const timeout = null
const userName = ''

async function checkApi (userName) {
        return new Promise(resolve => {
          clearTimeout(this.timeout)

          this.timeout = setTimeout(() => {
            if (!userName) return resolve('Please enter a user name.')
            if (userName === 'johnleider') return resolve('User name already taken. Please try another one.')

            return resolve(true)
          }, 1000)
        })
      }

async function submit (event) {
        this.loading = true

        const results = await event

        this.loading = false

        alert(JSON.stringify(results, null, 2))
      }
</script>

<template>
	<div class="content">
		<div class="flex-center" style="height: 100vh;">
			<v-card class="mx-auto px-6 py-8" width="500">
				<!-- <div style="max-width: 800px;"> -->
					<h2>Contact Me</h2>
					<!-- <v-sheet class="mx-auto" max-width="600"> -->
    					<v-form validate-on="submit lazy" @submit.prevent="submit">

							<v-text-field
           					 	label="Full Name"
            					prepend-inner-icon="mdi-account"
								variant="underlined"
          					></v-text-field>

							<!-- <v-text-field
    					    v-model="userName"
    					    :rules="rules"
    					    label="Full Name"
    					  ></v-text-field> -->

						  <v-text-field
    					    v-model="userName"
							prepend-inner-icon="mdi-phone"
    					    label="Phone Number"
							variant="underlined"
    					  ></v-text-field>

    					  <v-text-field
    					    v-model="userName"
							prepend-inner-icon="mdi-email"
    					    label="Email"
							variant="underlined"
    					  ></v-text-field>

						  <v-textarea
      						autocomplete="Write Your Message Here"
      						label="Message"
    						></v-textarea>

    					  <v-btn
    					    :loading="loading"
    					    class="mt-2"
    					    text="Submit"
    					    type="submit"
    					    block
    					  ></v-btn>
    					</v-form>
  					<!-- </v-sheet> -->
				<!-- </div> -->
			</v-card>
		</div>
	</div>
</template>