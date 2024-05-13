
import Bg from '../components/bg.vue';
<template>
  <!-- <Bg /> -->
  <Hero />
  <section id="resume" style="width: 100vw; min-height: 100vh; display: flex; justify-content: center; align-items: center;">

    <div style="padding: 20px; height: fit-content; max-width: 50vw;">
    <v-timeline align="start">
    <v-timeline-item
    >
      <template v-slot:opposite>
        <i>March, 2O22 - Present</i>
      </template>
      <div
      v-motion
      :initial="{
          opacity: 0,
          // y: 100,
      }"
      :visible="{
        opacity: 1,
        // y: 0,
      }"
      >
        <div class="text-h6">Physician Assistant / Medical Transcriptionist</div>
        <br>
        <p>
          <ul>
            <li>
          Developed and maintained a comprehensive library of medical codes and 
          descriptions, reducing time spent on revision, and ensuring compliance with coding standards.
            </li>
          <br>
            <li>
          Collaborated with physicians and other healthecare providers to clarify 
          medical record documentation and coding accuracy.
            </li>
            <br>
            <li>
              Researched and resolved coding discrepancies, reasuring doctors that patient records are duly kept.
            </li>
          </ul>
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:opposite>
        <i>November, 2020 - March, 2022</i>
      </template>
      <div
      v-motion
      :initial="{
          opacity: 0,
          // y: 100,
      }"
      :visible="{
        opacity: 1,
        // y: 0,
      }"
      >
        <div class="text-h6">Guest Relations Executive</div>
        <br>
        <p>
          <ul>
            <li>
              Effectively managed billing and invoicing as well as patient scheduling, 
              ensuring patients maintain an easy and satisfactory transition.
            </li>
          <br>
            <li>
              Prepared bills of all lab orders, and medication given to patients in the ward.
            </li>
            <br>
            <li>
              Provided a welcoming environment that assured patients their health is of top priority.
            </li>
          </ul>
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:opposite>
        <i>January, 2020 - June, 2020</i>
      </template>
      <div
      v-motion
      :initial="{
          opacity: 0,
          // y: 100,
      }"
      :visible="{
        opacity: 1,
        // y: 0,
      }"
      >
        <div class="text-h6">Receptionist and Personal Assistant</div>
        <br>
        <p>
          <ul>
            <li>
              Supported nursing staff in the assessment and monitoring of patient conditions.
            </li>
          <br>
            <li>
              Preserved a high standard of cleanliness within each working premises.
            </li>
            <br>
            <li>
              Trained 8 batches of new recruits every 6 months, ensuring a clear 
              understanding of hospital rules and their assigned duties.
            </li>
          </ul>
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:opposite>
        <i>March, 2O15 - January, 2O2O</i>
      </template>
      <div
      v-motion
      :initial="{
          opacity: 0,
          // y: 100,
      }"
      :visible="{
        opacity: 1,
        // y: 0,
      }"
      >
        <div class="text-h6">Accountant</div>
        <br>
        <p>
          <ul>
            <li>
              Successfully managed and monitored all areas of financial operations, including
              expenses against budget.
            </li>
          <br>
            <li>
              Monitoring client count whilst ensuring client services are carried out duly,
              running frequent profitability checks on offices.
            </li>
            <br>
            <li>
              Promptly and effectively resolved customer complaints, focusing on client 
              satisfaction.
            </li>
          </ul>
        </p>
      </div>
    </v-timeline-item>
  </v-timeline>
  </div>

  </section>
</template>

<style scoped>
.v-timeline:deep(.v-timeline-divider__inner-dot) {
    background-color: white;
    transition-timing-function: ease-out;
    animation: pulse 1s infinite alternate;
}

@keyframes pulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(.7);
  }
}
</style>