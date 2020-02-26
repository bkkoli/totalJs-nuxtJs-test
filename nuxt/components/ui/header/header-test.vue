<template>
    <header>
		<b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">Test Web App</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">KR</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item v-if="isLogined" href="/logout">Sign Out</b-dropdown-item>
          <b-dropdown-item v-if="!isLogined" href="/login">Login</b-dropdown-item>
          <b-dropdown-item v-if="!isLogined" href="/register">Register</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
	</header>
</template>

<style lang="less" scoped>

</style>

<script>
export default {
    data() {
      return {
        isLogined: false
      }
    },
    mounted() {

    },
    components:{

    }
}
</script>