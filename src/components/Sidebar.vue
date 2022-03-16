<template>
  <div class="header">
    <div class="logo">
      <h1>Ahmed</h1>
    </div>
    <ul class="list">
      <li>
        <router-link to="/">
          <font-awesome-icon icon="home" /> Home
        </router-link>
      </li>
      <li>
        <router-link to="/#about">
          <font-awesome-icon icon="user-check" /> About
        </router-link>
      </li>
      <li>
        <router-link to="/#services">
          <font-awesome-icon icon="briefcase" /> Services
        </router-link>
      </li>
      <li>
        <router-link to="/#experience">
          <font-awesome-icon icon="graduation-cap" /> Experience
        </router-link>
      </li>
      <li>
        <router-link to="/#works">
          <font-awesome-icon icon="layer-group" /> Works
        </router-link>
      </li>
      <li>
        <router-link to="/#contact">
          <font-awesome-icon icon="comments" /> Contact
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
  setup() {},
};
</script>