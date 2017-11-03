<template>
  <modal>
    <!-- header -->
    <template slot="header">
      <span class="icon">
        <i class="fa fa-sign-in "></i>
      </span>
      Login
    </template>

    <!-- error message if login failed -->
    <errormessage v-show="showError">
      <button class="delete" @click="showError = false"></button>
      The hashcode is required.
    </errormessage>

    <!-- hashcode input -->
    <inputfield>
      <template slot="title">Hashcode</template>
      <input type="text" class="input" tabindex="1" placeholder="Insert hashcode"
             v-model="hashcode">
      <span class="icon is-small is-left">
        <i class="fa fa-hashtag"></i>
      </span>
    </inputfield>

    <!-- footer -->
    <template slot="footer">
      <button class="button" @click="checkLogin()">Login</button>
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
        hashcode: '',
        showError: false,
      };
    },
    methods: {
      checkLogin() {
        if (this.hashcode !== '') {
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
