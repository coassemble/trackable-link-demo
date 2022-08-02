<template>
  <iframe v-if="hash" :src="src" />
</template>

<script>
const TRACKABLE_LINK = 'https://engineering.coassemble.com/enter/GVQ5TLg';

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
      return `${TRACKABLE_LINK}?id=${encodeURIComponent(this.identifier)}&hash=${encodeURIComponent(this.hash)}`;
    }
  },
  mounted() {
    this.getHash();
    this.listen();
  },
  methods: {
    listen() {
      window.addEventListener('message', event => window.parent && window.parent.postMessage(event.data, '*'));
    },
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
