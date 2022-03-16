<template>
  <section class="contactSection" id="contact">
    <h1 class="sectionTitle">Contact Me</h1>
    <div class="grid">
      <form @submit.prevent="contact" class="form">
        <div class="group">
          <div class="inputGroup">
            <label class="label">Your name</label>
            <input
              type="text"
              class="input"
              placeholder="Your name"
              v-model="name"
              required
            />
          </div>
          <div class="inputGroup">
            <label class="label">Your Email</label>
            <input
              type="email"
              class="input"
              placeholder="Your email"
              v-model="email"
              required
            />
          </div>
        </div>
        <div class="inputGroup">
          <label class="label">Subject</label>
          <input
            type="text"
            class="input"
            placeholder="Subject"
            v-model="subject"
            required
          />
        </div>
        <div class="inputGroup">
          <label class="label">Message</label>
          <textarea
            type="text"
            class="textArea"
            v-model="message"
            required
          ></textarea>
        </div>
        <button class="btn" type="submit">Send a message</button>
        <div class="success-alert">
          <font-awesome-icon icon="check-circle" /> Your message has been sent
          successfully
        </div>
        <div class="danger-alert">
          <font-awesome-icon icon="ban" /> There's an error occured, Or you has
          sent a message today
        </div>
      </form>
      <div class="info">
        <div class="dataGroup">
          <label><font-awesome-icon icon="envelope" /></label>
          <a href="mailto:ahmed_noreldin@outlook.com">
            <span>ahmed_noreldin@outlook.com</span>
          </a>
        </div>
        <div class="dataGroup">
          <label><font-awesome-icon icon="phone" /></label>
          <a href="call:+201275457924">
            <span>+20 127 545 7924</span>
          </a>
        </div>
        <div class="dataGroup">
          <label><font-awesome-icon icon="thumbtack" /></label>
          <a href="#">
            <span>Moharram Bey, Alexandria - Egypt, 21633</span>
          </a>
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
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    contact() {
      axios
        .post("http://127.0.0.1:8000/api/contact", {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        })
        .then(
          (res) =>
            (document.querySelector(".success-alert").style.display = "block"),
          (document.querySelector(".danger-alert").style.display = "none")
        )
        .catch(
          (err) =>
            (document.querySelector(".danger-alert").style.display = "block"),
          (document.querySelector(".success-alert").style.display = "none")
        );
    },
  },
};
</script>