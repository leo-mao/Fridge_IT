<template>
  <div>
    <!-- title -->
    <hero>
      <span class="icon">
        <i class="fa fa-gear"></i>
      </span>
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
        <span class="icon is-small is-left">
          <i class="fa fa-language"></i>
        </span>
      </inputfield>

      <!-- change password -->
      <h1 class="form-title">Change display name</h1>

      <!-- display name -->
      <inputfield>
        <template slot="title">Display name</template>
        <input type="text" class="input" v-model="displayName">
        <span class="icon is-left is-small">
          <i class="fa fa-user"></i>
        </span>
      </inputfield>

      <!-- save button -->
      <button class="button" @click="">Save</button>
    </form>
  </div>
</template>

<script>
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
        displayName: '',
      };
    },
  };
</script>

<style>
  @media screen and (max-width: 1499px), print {
    .form-title {
      margin-left: 0.8rem;
    }

    .button {
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
