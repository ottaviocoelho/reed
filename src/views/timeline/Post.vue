<template lang="html">
  <div class="post">
    <p class="title">{{title}}</p>
    <p class="subtitle">{{description}}</p>
    <div class="tags-wrapper">
      <user-tags :tags="tags"/>
    </div>
    <div class="user-wrapper">
      <user
      :right="true"
      :user="author"/>
    </div>
  </div>
</template>

<script>
import User from '@/components/User'
import Tags from '@/components/Tags'

export default {
  name: 'Post',
  components: {
    User,
    'user-tags': Tags
  },
  props: [
    'title',
    'tags',
    'description',
    'author'
  ],
  computed: {
    allTags() {
      return this.tags.map(tag => '#' + tag).reduce((tag, all) => all + " " + tag, '').trim()
    }
  }
}
</script>

<style lang="css" scoped>

.post {
  height: 180px;
  width: 100%;
  background: white;
  padding: 10px;
  padding-top: 20px;
  margin-bottom: 30px;
  border: 1px solid var(--color-gray-light);
  border-left: 4px solid var(--color-primary-light);
  position: relative;
  transition: box-shadow ease-in 0.2s;
}

.post:hover {
  cursor: pointer;
  border-left: 4px solid var(--color-primary);
  box-shadow: -10px 10px 0px -4px var(--color-primary-light);
}

.post p {
  margin: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.post .title {
  font-size: var(--font-xxxg);
  color: var(--color-off-black);
}

.post .subtitle {
  font-size: var(--font-bg);
  color: var(--color-gray);
  max-lines: 2;
}

.post .tags-wrapper {
  position: absolute;
  bottom: 10px;
}

.user-wrapper {
  width: 300px;
  position: absolute;
  bottom:0;
  right: 10px;
}

</style>
