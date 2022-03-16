<template>
  <div id="root">
    <div class="container">
      <div class="header-desktop">
        <Sidebar />
      </div>
      <main class="content">
        <HeadingSection />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <WorksSection />
        <ContactSection />
      </main>
    </div>
  </div>
</template>
<script setup>
import Sidebar from "@/components/Sidebar.vue";
import HeadingSection from "@/components/HeadingSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import WorksSection from "@/components/WorksSection.vue";
import ContactSection from "@/components/ContactSection.vue";
</script>
