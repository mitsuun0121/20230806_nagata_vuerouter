<template>
  <div id="app">
    <button @click="topPage">トップページ</button>
    <button @click="subPage">サブページ</button>
    <button @click="userListPage">ユーザー一覧ページ</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    topPage () {
      this.$router.push({ name: 'home' })
    },
    subPage () {
      this.$router.push({ name: 'SubPage' })
    },
    userListPage () {
      this.$router.push({ name: 'UserList', query: { redirect: true } })
    }
  }
}
</script>
<style>

</style>
