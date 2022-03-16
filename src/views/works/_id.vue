<template>
  <div id="root">
    <div class="container">
      <div class="header-desktop">
        <Sidebar />
      </div>
      <main class="content">
        <div class="back-mobile">
          <a href="/works"><font-awesome-icon icon="chevron-left" /></a>
        </div>
        <div class="project-page">
          <div class="project">
            <div class="preview">
              <div class="image">
                <img :src="`/projects/${project.pic}`" />
              </div>
              <h3 class="title">{{ project.title }}</h3>
              <a :href="`${project.preview}`">
                <button class="preview">Live Preview</button>
              </a>
            </div>
            <div class="info">
              <h3>Project Details :</h3>
              <p class="description">{{ project.details }}</p>
            </div>
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
// import VueGallerySlideshow from "vue-gallery-slideshow";
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      project: [],
    };
  },
  mounted() {
    axios
      .get(`http://127.0.0.1:8000/api/project/${this.$route.params.id}`)
      .then((response) => (this.project = response.data))
      .catch((error) => console.log(error));
  },
};
</script>
