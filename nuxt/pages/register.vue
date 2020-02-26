<template>
  <section>
    Login
    <sui-form>
      <sui-form-field>
        <label>E-mail</label>
        <input type="email" placeholder="이메일" />
      </sui-form-field>
      <sui-form-field>
        <label>Password</label>
        <input type="password" placeholder="비밀번호" />
      </sui-form-field>
      <sui-form-field>
        <label>Password Confirm</label>
        <input type="password" placeholder="비밀번호 확인" />
      </sui-form-field>
      <sui-form-fields fields="two">
        <sui-form-field>
          <label>First Name</label>
          <input placeholder="First Name" type="text" />
        </sui-form-field>
        <sui-form-field>
          <label>Last Name</label>
          <input placeholder="Last Name" type="text" />
        </sui-form-field>
      </sui-form-fields>
      <sui-button type="submit">Submit</sui-button>
    </sui-form>
  </section>
</template>

<style lang="less" scoped></style>

<script>
export default {
  layout: 'default',
  components: {},
  data() {},
  mounted() {},
}
</script>
