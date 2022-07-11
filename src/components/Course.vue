<template>
  <iframe v-if="hash" :src="src" />
</template>

<script>
const TRACKABLE_LINK = 'https://trainingorganisation.featuredev-18640-tcu.openassemble.com/enter/JWk0LzD'; // TODO: Update to production link

export default {
  name: 'Course',
  props: {
    identifier: { type: String, default: '' },
  },
  data() {
    return {
      hash: null,
    };
  },
  computed: {
    src() {
      return `${TRACKABLE_LINK}?id=${this.identifier}&hash=${this.hash}`;
    }
  },
  mounted() {
    this.getHash();
  },
  methods: {
    getHash() {
      const xhttp = new XMLHttpRequest();
      let url = `/.netlify/functions/hash?identifier=${this.identifier}`;

      xhttp.open('GET', url, false);
      xhttp.send();

      if (xhttp.status === 200) {
          const response = JSON.parse(xhttp.responseText);
          this.hash = response.hash;
      }
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
