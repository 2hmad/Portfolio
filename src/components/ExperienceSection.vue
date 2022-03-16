<template>
  <section class="experienceSection" id="experience">
    <h1 class="sectionTitle">Experience</h1>
    <div class="sides">
      <div class="side">
        <div class="timeline">
          <div class="outer">
            <div
              class="card"
              v-for="education of educations"
              :key="education.id"
            >
              <div class="info">
                <span class="date"
                  >{{ education.from }} To {{ education.to }}</span
                >
                <h3 class="title">{{ education.title }}</h3>
                <p>{{ education.details }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="side">
        <div class="timeline">
          <div class="outer">
            <div class="card" v-for="work of works" :key="work.id">
              <div class="info">
                <span class="date">{{ work.from }} To {{ work.to }}</span>
                <h3 class="title">{{ work.title }}</h3>
                <p>{{ work.details }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      educations: [],
      works: [],
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/experiences/education")
      .then((res) => (this.educations = res.data))
      .catch((err) => console.log(err));
    axios
      .get("http://127.0.0.1:8000/api/experiences/work")
      .then((res) => (this.works = res.data))
      .catch((err) => console.log(err));
  },
};
</script>