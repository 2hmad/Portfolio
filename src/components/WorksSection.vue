<template>
  <section class="worksSection" id="works">
    <h1 class="sectionTitle">Recent Works</h1>
    <div class="works">
      <div class="project" v-for="project of projects" :key="project.id">
        <router-link :to="`/works/${project.id}`">
          <div class="card websites">
            <div class="cardImg">
              <img :src="`projects/${project.pic}`" />
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <router-link to="works"><button class="btn">Show more</button></router-link>
  </section>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      projects: [],
    };
  },
  async fetch() {
    this.projects = await fetch(`http://127.0.0.1:8000/api/projects/limit`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  },
};
</script>