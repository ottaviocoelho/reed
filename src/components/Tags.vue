<template lang="html">
  <section class="tags">
    <p v-if="title">{{title}}</p>
    <span :key="tag" v-for="tag in tags" :class="{'user-tag': isUserTag(tag)}">
      #{{tag}}
    </span>
  </section>
</template>

<script>
export default {
  name: 'Tags',
  props: ['tags', 'userTags', 'title'],
  methods: {
    isUserTag(tag) {
      if(this.userTags) {
        return this.userTags.includes(tag)
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="css" scoped>

.tags {
  padding: 10px;
}

.tags > p {
  font-size: var(--font-bg);
  color: var(--color-yellow-semi-dark);
}

.tags > span {
  padding: 2px;
  color: var(--color-primary);
  margin-right: 7px;
  font-size: var(--font-md);
}

.tags span.user-tag {
  background: var(--color-primary);
  color: var(--color-yellow);
}

@media (max-width: 1560px) {

  .tags > p {
    margin: 2px 0px;
  }

}

</style>
