<template>
  <section>
    <b-container fluid="sm">
      <b-col class="d-flex justify-content-center">
        <sui-form>
          <h1>
            Login
          </h1>
          <sui-form-field>
            <label>Id</label>
            <input v-model="userId" type="text" placeholder="아이디" />
          </sui-form-field>
          <sui-form-field>
            <label>Password</label>
            <input v-model="password" type="password" placeholder="비밀번호" />
          </sui-form-field>
          <sui-button @click="onClickLogin">Login</sui-button>
          <nuxt-link to="#">Register</nuxt-link>
        </sui-form>
      </b-col>
    </b-container>
  </section>
</template>

<style lang="less" scoped></style>

<script>
export default {
  layout: 'default',
  components: {},
  data() {
    return {
      userId: '',
      password: '',
    }
  },
  mounted() {},
  methods: {
    async onClickLogin() {
      if (this.userId === '') {
        alert('아이디를 입력해주세요')
        return false
      }
      if (this.password === '') {
        alert('패스워드를 입력해주세요')
        return false
      }

      await this.$axios.get('http://localhost:4593/' + this.userId)
      return false
    },
  },
}
</script>
