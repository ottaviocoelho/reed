<template lang="html">
  <section class="timeline">
    <section class="timeline-posts-wrapper">
      <post v-for="post in posts"
        :key="post.title + post.author"
        v-bind="post"/>
    </section>
  </section>
</template>

<script>
import posts from '@/mocks/posts'
import Post from './Post'

export default {
  name: 'Timeline',
  components: {
    Post
  },
  data() {
    return {
      posts
    }
  }
}
</script>

<style lang="css" scoped>

.timeline {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
}

.timeline-posts-wrapper {
  width: 65%;
  overflow: auto;
  padding-top: 150px;
  padding-left: 10%;
  padding-right: 30px;
}

</style>
