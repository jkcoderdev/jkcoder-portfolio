<script setup>
import MainSection from './home/MainSection.vue';
import SkillsSection from './home/SkillsSection.vue';
import WorkSection from './home/WorkSection.vue';
import ProjectsSection from './home/ProjectsSection.vue';
import ContactSection from './home/ContactSection.vue';
</script>

<template>
  <MainSection />
  <SkillsSection />
  <WorkSection />
  <ProjectsSection />
  <ContactSection />
</template>

<style lang="scss" scoped>
:host {
  overflow-x: hidden;
}
</style>