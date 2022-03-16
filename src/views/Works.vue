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
        <!-- <div class="projects-page" v-lazy-container="{ selector: 'img' }">
          <div class="project" v-for="project of projects" :key="project.id">
            <router-view :to="`/works/${project.id}`">
              <img :data-src="`/projects/${project.pic}`" />
            </router-view>
          </div>
        </div> -->
      </main>
    </div>
  </div>
</template>
<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { RouterLink } from "vue-router";
</script>