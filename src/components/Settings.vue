<template>
  <div>
    <!-- title -->
    <hero>
      Settings
      <template slot="subtitle">You can change the application settings here.</template>
    </hero>

    <!-- settings form -->
    <form>
      <!-- language select -->
      <h1 class="form-title">Change language</h1>
      <inputfield>
        <div class="select">
          <select class="input select-option" title="language">
            <option v-for="language in languages" :selected="language === currentLanguage">{{ language }}</option>
          </select>
        </div>
      </inputfield>

      <!-- change password -->
      <h1 class="form-title">Change password</h1>

      <!-- current password -->
      <inputfield>
        <template slot="title">Current password</template>
        <input type="password" class="input" v-model="currentPassword">
      </inputfield>

      <!-- new password -->
      <inputfield>
        <template slot="title">New password</template>
        <input type="password" class="input" v-model="newPassword">
      </inputfield>

      <!-- confirm new password -->
      <inputfield>
        <template slot="title">Confirm new password</template>
        <input type="password" class="input" v-model="newPasswordConfirm">
      </inputfield>
    </form>
  </div>
</template>

<script>
  /* eslint-disable linebreak-style */
  import Hero from './fragments/Hero';
  import Inputfield from './fragments/Inputfield';

  export default {
    components: {
      Hero,
      Inputfield,
    },
    data() {
      return {
        languages: ['English', 'German'],
        currentLanguage: 'English',
        currentPassword: '',
        newPassword: '',
        newPasswordConfirm: '',
      };
    },
  };
</script>

<style>
  @media screen and (max-width: 1499px), print {
    .form-title {
      margin-left: 0.8rem;
    }
  }

  .form-title {
    color: #363636;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.125;
  }
</style>
