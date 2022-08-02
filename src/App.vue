

<template>
  <Course
    v-if="route === 'course'"
    :identifier="identifier"
  />
  <main v-else>
    <header>
      <span class="logo">
        <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.39 25.39A32.11 32.11 0 0 1 48 16v16c-4.48 0-8.32 1.7-11.3 4.7L25.38 25.38Z" fill="#F73BA0"></path>
          <path d="M36.7 36.7A15.62 15.62 0 0 0 32 48c0 4.48 1.7 8.32 4.7 11.3A15.62 15.62 0 0 0 48 64v16a32.11 32.11 0 0 1-22.61-9.39A32.11 32.11 0 0 1 16 48c0-8.75 3.63-16.85 9.39-22.61l11.3 11.3Z" fill="#446CFC"></path>
          <path d="M48 32c4.48 0 8.32 1.7 11.3 4.7A15.62 15.62 0 0 1 64 48h16c0-8.75-3.63-16.85-9.39-22.61A32.11 32.11 0 0 0 48 16v16Zm32 32H64v16h16V64Z" fill="#151F6D"></path>
        </svg>
      </span>
      <h1>My Academy</h1>
    </header>
    <section>
      <article class="container">
          <div class="wrapper">
              <div class="content">
                  <img class="image" src="https://static.ecoach.com/uploads/course/49414/6d4d2629ed3b3aae2ebaa2f4b0128528a8bb3e47.png" alt="">
                  <div class="detail">
                      <h2 class="heading">
                          Remote work policy
                      </h2>
                      <button class="button" @click="route = 'course'">
                          <span class="link-text">
                              Start course
                          </span>
                      </button>
                  </div>
              </div>
          </div>
      </article>
    </section>
  </main>
</template>

<script>
import Course from './components/Course.vue';

export default {
  name: 'App',
  components: { Course },
  data() {
    return {
      route: 'dashboard',
      identifier: ''
    };
  },
  mounted() {
    this.getIdentifier();
  },
  methods: {
    getIdentifier() {
      const params = new URLSearchParams(window.location.search);
      this.identifier = params.get('id');
    }
  }
}
</script>

<style>
:root {
  --cloud: #F6F7F8;
  --primary: #446CFC;
}

html {
  height: 100%;
  display: flex;
  flex-direction: column;

  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body, main, #app {
  margin: 0;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  padding: 40px;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.6) 100%),
    url('https://static.ecoach.com/assets/course/Default_Course_Image_1.svg') no-repeat;
  background-size: cover;
  background-position: center;
}
.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 12px;
    background: #FFF;
    overflow: hidden;
}
.logo svg {
    width: 100%;
    height: 100%;
}
h1 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #FFF;
}
section {
  flex: 1 1 auto;
  padding: 32px;
  background: var(--cloud);
}

.container {
    width: 276px;
    background-color: white;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    text-align: left;
    box-shadow:
        0px 5px 20px rgba(0, 0, 0, 0.04),
        0px 1px 6px rgba(0, 0, 0, 0.04),
        0px 0px 1px rgba(0, 0, 0, 0.04);
}
.wrapper { padding-bottom: 133.3333333333%; } /* 3:4 ratio */
.content {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.image {
  object-fit: cover;
  width: 100%;
}
.detail {
  flex: 1 1 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.heading {
  margin: 0;
  font-size: 16px;
  line-height: 20px;
  font-family: 'Poppins';
}
.button {
  cursor: pointer;
  appearance: none;
  border: 0;
  text-align: center;
  padding: 10px;
  border-radius: 32px;

  color: #FFFFFF;
  background-color: var(--primary);

  font-size: 14px;
  line-height: 16px;
  font-family: 'Poppins';
}
</style>