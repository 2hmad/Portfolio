<template>
  <div id="app">
    <div class="container">
      <div class="header-desktop">
        <Sidebar />
      </div>
      <main class="content">
        <div class="back-mobile">
          <a href="/"><font-awesome-icon icon="chevron-left" /></a>
        </div>
        <h1 style="margin: 3% auto">Recent Projects</h1>
        <div class="projects-page">
          <div class="project" v-for="project of projects" :key="project.id">
            <router-link :to="`/works/${project.id}`">
              <img :src="`/projects/${project.pic}`" />
            </router-link>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import { RouterLink } from "vue-router";
import axios from "axios";
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/projects/limit")
      .then((response) => (this.projects = response.data))
      .catch((error) => console.log(error));
  },
};
</script>
