<template>
  <iframe :src="src" />
</template>

<script>
const TRACKABLE_LINK = 'https://trainingorganisation.featuredev-18640-tcu.openassemble.com/enter/JWk0LzD'; // TODO: Update to production link

export default {
  name: 'Course',
  props: {
    identifier: { type: String, default: '' },
  },
  computed: {
    src() {
      return `${TRACKABLE_LINK}?id=${this.identifier}`;
    }
  }
}
</script>

<style scoped>
iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
