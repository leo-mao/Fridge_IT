<template>
  <div>
    <!-- title -->
    <hero>
      <span class="icon">
        <i class="fa fa-gear"></i>
      </span>
      <label v-lang.settings_hero></label>
      <template slot="subtitle"><label v-lang.settings_sub_hero></label></template>
    </hero>

    <!-- settings form -->
    <!-- language select -->
    <h1 class="form-title" v-lang.settings_change_lang></h1>
    <inputfield>
      <div class="select">
        <select class="input select-option" title="language" v-model="currentLanguage" @change="submit">
          <option v-lang.settings_lang_en value="en"></option>
          <option v-lang.settings_lang_ger value="ger"></option>
        </select>
      </div>
      <span class="icon is-small is-left">
        <i class="fa fa-language"></i>
      </span>
    </inputfield>

    <!-- change password 
    <h1 class="form-title">Change display name</h1>

    <!-- display name 
    <inputfield>
      <template slot="title">Display name</template>
      <input type="text" class="input" v-model="displayName">
      <span class="icon is-left is-small">
        <i class="fa fa-user"></i>
      </span>
    </inputfield>-->

    <!-- save button 
    <button class="button" @click="submit()">Save</button>-->
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
        currentLanguage: null,
        // displayName: '',
      };
    },
    methods: {
      submit() {
        if (this.currentLanguage === 'en') {
          this.language = 'english';
        } else if (this.currentLanguage === 'ger') {
          this.language = 'german';
        }
      },
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
