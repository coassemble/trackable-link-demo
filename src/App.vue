

<template>
  <Course
    v-if="identifier"
    :identifier="identifier"
  />
  <Form
    v-else
    @submit:identifier="identifier = $event"
  />
</template>

<script>
import Form from './components/Form.vue';
import Course from './components/Course.vue';

export default {
  name: 'App',
  components: { Form, Course },
  data() {
    return {
      identifier: ''
    };
  }
}
</script>

<style>
html {
  height: 100%;
  display: flex;
  flex-direction: column;

  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  margin: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
#app {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
