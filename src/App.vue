<template>
  <main>
    <img src="@/assets/images/submarine.svg">
    <router-view/>
    <section class="user-control-wrapper">
      <user-control/>
    </section>
  </main>
</template>

<script>
import UserControl from './components/UserControl'

export default {
  name: 'App',
  components: {
    UserControl
  }
}
</script>

<style>

.user-control-wrapper {
  position: absolute;
  width: 30%;
  max-width: 400px;
  top: 150px;
  right: 150px;
}

main {
  width: 100vw;
  height: 100vh;
  background: white;
  position: relative;
  overflow: hidden;
  z-index: 5
}

main > img {
  z-index: 1;
  position: absolute;
  bottom: 15px;
  right: 50px;
  width: 250px;
  opacity: 0.2;
}

main > *:not(img) {
  z-index: 5;
}

@media (max-width: 1560px) {

  .user-control-wrapper {
    top: 0;
    right: 10%;
    width: 80%;
    max-width: 100%;
  }

  main {
    padding-top: 150px;
  }

}

html,
body {
  width: 100%;
  height: 100%;
  min-height: 100%;
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>
