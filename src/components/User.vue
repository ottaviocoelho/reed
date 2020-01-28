<template lang="html">
  <section class="user">
    <p class="name" :class="{right}">{{user.name}}</p>
    <p class="role" :class="{right}">{{user.role}}</p>
    <div class="user-image" v-if="user.photo">
    </div>
  </section>
</template>

<script>
export default {
  name: 'User',
  props: {
    right: {
      default: false
    },
    user: {
      default: () => {
        return {
          name: '',
          role: '',
          photo: '',
          squad: ''
        }
      }
    }
  },
  computed: {
    goddamnit() {
      return this.user.photo
    }
  },
  methods: {
    getImgUrl(photo) {
      var images = require.context('../assets/', false, /\.jpg$/)
      return images('./' + photo + ".jpg")
    }
  }
}
</script>

<style lang="css" scoped>

.user {
  --paragraph-margin: 3px;

  width: 100%;
  min-height: 80px;
  position: relative;
  padding-right: 60px;
  padding-top: calc(10px - var(--paragraph-margin));
}

.user > p {
  margin: var(--paragraph-margin) 10px;
}

.user .name {
  font-size: var(--font-bg);
  color: var(--color-primary);
}

.user .role {
  font-size: var(--font-sm);
  color: var(--color-primary-semi-light);
}

.user-image {
  border-radius: 50%;
  background: var(--color-primary);
  height: 40px;
  width: 40px;
  position: absolute;
  top: 10px;
  right: 10px;
  overflow: hidden;
}

.user-image img{
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
}

</style>
