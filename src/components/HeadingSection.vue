<template>
  <div id="app">
    <section class="home_section" id="home">
      <div class="info">
        <div class="pic">
          <img src="/images/1642511588888.jpg" />
        </div>
        <h1>Ahmed M. Ibrahim</h1>
        <vue-typer text="Hello World! I was registered locally!"></vue-typer>
        <!-- <vue-typed-js
          :strings="['Software Engineer', 'Full-stack Developer']"
          :typeSpeed="50"
          :backSpeed="30"
          :loop="true"
          style="text-align: center; display: block"
        >
          <p>
            I'm a
            <span class="typing"></span>
          </p>
        </vue-typed-js> -->
      </div>
      <div class="social">
        <a href="https://www.facebook.com/Mr.AhmedMohammd/">
          <img src="/icons/facebook.svg" />
        </a>
        <a href="#">
          <img src="/icons/linkedin.svg" />
        </a>
        <a href="https://twitter.com/Mr_Ahmedmohammd">
          <img src="/icons/twitter.svg" />
        </a>
        <a href="https://www.behance.net/ahmed_m">
          <img src="/icons/behance.svg" />
        </a>
      </div>
      <a href="#contact"><button class="hire_me">Hire Me</button></a>
      <a href="#about" style="display: flex; justify-content: center">
        <div class="mouse">
          <span class="wheel"></span>
        </div>
        <div class="scrollDown">Scroll Down</div>
      </a>
    </section>
  </div>
</template>
<script>
// import VueTypedJs from "vue-typed-js";
// import VueTyper from "vue-typer";
export default {
  components: {
    // VueTyper,
  },
  setup() {
    return {};
  },
};
</script>