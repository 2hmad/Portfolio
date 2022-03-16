<template>
  <section class="aboutSection" id="about">
    <h1 class="SectionTitle">About Me</h1>
    <div class="downloadCv">
      <div class="pic">
        <img src="images/1642511588888.jpg" />
      </div>
      <div class="box">
        <p>
          I am Ahmed Mohamed Ibrahim, Software Engineer from Alexandria, Egypt.
          I have rich experience in Front-end (Vue.js & Nuxt) and Back-end (PHP
          & Laravel), also I am good at Mobile Applications with Vue Native.
        </p>
        <button class="downloadBtn" @click="downloadCv()">Download CV</button>
      </div>
    </div>
    <!-- <div class="statistics">
      <div class="item">
        <div class="icon">
          <font-awesome-icon icon="project-diagram" />
        </div>
        <div class="title">
          <div class="iCountUp">
            <ICountUp
              :delay="delay"
              endVal="30"
              :options="options"
              class="count"
            />
          </div>
          <span class="countTitle">Projects completed</span>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <font-awesome-icon icon="mug-hot" />
        </div>
        <div class="title">
          <div class="iCountUp">
            <ICountUp
              :delay="delay"
              endVal="30"
              :options="options"
              class="count"
            />
          </div>
          <span class="countTitle">Cup of coffee</span>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <font-awesome-icon icon="users" />
        </div>
        <div class="title">
          <div class="iCountUp">
            <ICountUp
              :delay="delay"
              endVal="30"
              :options="options"
              class="count"
            />
          </div>
          <span class="countTitle">Satisfied clients</span>
        </div>
      </div>
    </div> -->
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      delay: 1000,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: "",
      },
    };
  },
  methods: {
    downloadCv() {
      axios({
        url: "Ahmed_Mohamed_Ibrahim_Full_Stack_Developer.pdf",
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement("a");
        fileLink.href = fileURL;
        fileLink.setAttribute(
          "download",
          "Ahmed_Mohamed_Ibrahim_Full_Stack_Developer.pdf"
        );
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    },
  },
};
</script>