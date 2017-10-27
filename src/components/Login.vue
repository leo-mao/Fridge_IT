<template>
  <modal>
    <!-- header -->
    <template slot="header">Login</template>

    <!-- error message if login failed -->
    <errormessage v-show="showError">
      <button class="delete" @click="showError = false"></button>
      The username and password is required.
    </errormessage>

    <!-- username input -->
    <inputfield>
      <template slot="title">Username</template>
      <input type="text" class="input" tabindex="1" placeholder="Insert username"
             v-model="username">
    </inputfield>

    <!-- password input -->
    <inputfield>
      <template slot="title">Password</template>
      <input type="password" class="input" tabindex="2" placeholder="Insert password"
             v-model="password" @keyup.enter="checkLogin()">
    </inputfield>

    <!-- footer -->
    <template slot="footer">
      <button class="button" style="background-color: #0000ee; color: white; border-color: #0000ee"
              @click="checkLogin()">Login
      </button>
    </template>
  </modal>
</template>

<script>
  /* eslint-disable linebreak-style */

  import Modal from './fragments/Modal';
  import Inputfield from './fragments/Inputfield';
  import Errormessage from './fragments/Error-message';

  export default {
    components: {
      Modal,
      Inputfield,
      Errormessage,
    },
    data() {
      return {
        username: '',
        password: '',
        showError: false,
      };
    },
    methods: {
      checkLogin() {
        if (this.username !== '' && this.password !== '') {
          this.showError = false;
          /* success handling TBD */
          this.$router.push('/settings');
        } else {
          this.showError = true;
          this.$showSuccess = false;
        }
      },
    },
  };
</script>

<style>
  .field {
    width: 100%;
  }
</style>
