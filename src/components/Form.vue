

<template>
  <form @submit.prevent="submit">
    <input
      v-model="identifier"
    />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      identifier: '',
    };
  },
  methods: {
    submit() {
        this.$emit('submit:identifier', this.identifier);
    }
  }
}
</script>
