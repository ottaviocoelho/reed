<template lang="html">
  <section class="user-control">
    <h1>
      <span>REED</span>
    </h1>
    <header>
    </header>
    <input type="text" placeholder="Pesquise posts, tags, times..." value="">
    <div class="content">
      <user :right="true"
      :user="user"/>
      <user-tags
        :tags="tags"
        title="Minhas Tags"
      />
      <button type="button" class="primary">NOVO POST</button>
    </div>
  </section>
</template>

<script>
import User from './User'
import Tags from './Tags'

export default {
  name: 'UserControl',
  components: {
    User,
    'user-tags': Tags
  },
  data() {
    return {
      tags: ['backend', 'frontend', 'survey', 'devops'],
      userTags: ['backend', 'frontend', 'survey', 'devops'],
      user: {
        name: 'Otávio Coelho',
        role: 'Analista Desenvolvedor II',
        photo: 'otavio',
        squad: 'Contato'
      }
    }
  }
}
</script>

<style lang="css" scoped>

.user-control {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 100%;
  max-width: 450px;
  position: relative;
  box-shadow: 0px 1px 0px 1px var(--color-gray-light);
}

.user-control h1 {
  position: absolute;
  margin: 0px;
  bottom: calc(100% + 10px);
  color:transparent;
  overflow:hidden;
  display:inline-block;
}

.user-control h1 span {
  font-size: var(--font-xxxg);
  font-weight: bold;
  background: linear-gradient(to right, var(--color-primary-semi-light), var(--color-primary-semi-dark));
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  display:block;
}

.user-control header {
  width: 100%;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(to right, var(--color-primary-semi-light), var(--color-primary-semi-dark));
}

.user-control input {
  margin: 15px 10%;
  width: 80%;
}

.user-control .content {
  width: 100%;
  padding: 5px;
  position: relative;
}

.user-control .content > button {
  position: absolute;
  top: 110%;
  right: 0;
}

@media (max-width: 1560px) {

  .user-control {
    max-width: 100%;
    box-shadow: 0px 0px 0px 0px white;
  }

  .user-control > header {
    height: 5px;
  }

  .user-control > h1 {
    right: calc(100% + 10px);
    top: 10px;
    height: fit-content;
  }

  .user-control > input {
    margin: 15px 0px;
    max-width: 60%;
  }

  .user-control .content {
    position: absolute;
    right: 0;
    top: 10px;
    width: 35%;
  }

  .user-control .content > button {
    position: absolute;
    right: 0%;
    min-width: 200px;
    top: 120%;
  }

  .user-control .user {
    min-height: 0px;
    height: fit-content;
  }

}

</style>
