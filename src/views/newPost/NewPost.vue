<template lang="html">
  <section class="new-post-container">
    <section class="new-post-wrapper">
      <section class="new-post">
        <span class="title left">New Post</span>
        <input type="text" class="left" name="" value="" placeholder="Title">
        <input type="text" class="left secondary" name="" value="" placeholder="Tags">
        <textarea name="name" autofocus cols="180"></textarea>
        <section class="buttons-wrapper">
          <button type="button" class="secondary" name="button" @click="() => $router.back()">Cancel</button>
          <button type="button" class="primary" name="button">Submit</button>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'NewPost'
}
</script>

<style lang="css" scoped>

.title {
  font-size: var(--font-xxg);
  color: var(--color-primary-semi-dark);
}

.new-post-container {
  width: 60%;
  height: 100%;
  padding: 10%;
  padding-top: 150px;
}

.new-post-wrapper {
  border-radius: 50px;
  z-index: 99;
  max-width: 850px;
  opacity: 1;
  height: 100%;
}

.new-post {
  border-radius: 50px;
  width: 100%;
  height: 100%;
}

.left {
  float: left;
  clear: left;
  margin-bottom: 10px;
}

.new-post textarea {
  width: 100%;
  min-height: 80%;
  background: white;
  margin-top: 20px;
  resize: none;
  padding: 20px 5px 5px 20px;
  border: 1px solid var(--color-gray);
}

</style>
