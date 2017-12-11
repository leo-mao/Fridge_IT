// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import MultiLanguage from 'vue-multilanguage';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(MultiLanguage, {
  default: 'en',
  english: {
    fridge: 'Fridge',
    loading: 'Loading...',
    home_hero: 'Home',
    home_sub_hero: 'Welcome to the Fridge-IT WebApp',
    home_chart_label: 'Fridge temperature in °C',
    slots_error_text: 'Failed loading the information.',
    settings_hero: 'Settings',
    settings_sub_hero: 'You can change the application settings here',
    settings_change_lang: 'Change language',
    settings_lang_en: 'English',
    settings_lang_ger: 'German',
    slots: 'Slots',
    slot_sub_hero: 'Here you can see detailed information about the slot',
    slot_curr_temp: 'Current temperature:',
    slot_row: 'Row:',
    slot_col: 'Column:',
    slot_added: 'Added:',
    slot_reserved: 'Reserved:',
    slot_reserve_button: 'reserve slot',
    slot_chart_label: 'Slot temperature in °C',
    slot_error_text: 'Error while loading information about the slot. There is no slot with this id.',
    navbar_home: 'Home',
    navbar_settings: 'Settings',
  },
  german: {
    fridge: 'Kühlschrank',
    loading: 'Lädt...',
    home_hero: 'Startseite',
    home_sub_hero: 'Willkommen in der Fridge-IT WebApp',
    home_chart_label: 'Kühlschranktemperaturen in °C',
    slots_error_text: 'Laden der Informationen fehlgeschlagen.',
    settings_hero: 'Einstellungen',
    settings_sub_hero: 'Hier können Sie die Anwendungeinstellungen ändern',
    settings_change_lang: 'Sprache ändern',
    settings_lang_en: 'Englisch',
    settings_lang_ger: 'Deutsch',
    slots: 'Slots',
    slot_sub_hero: 'Hier erhalten Sie genauere Informationen über den Slot',
    slot_curr_temp: 'Aktuelle Temperatur:',
    slot_row: 'Reihe:',
    slot_col: 'Spalte:',
    slot_added: 'Hinzugefügt am:',
    slot_reserved: 'Reserviert:',
    slot_reserve_button: 'Slot reservieren',
    slot_chart_label: 'Slot Temperaturen in °C',
    slot_error_text: 'Informationen über den Slot konnten nicht geladen werden. Es existiert kein Slot mit dieser id.',
    navbar_home: 'Startseite',
    navbar_settings: 'Einstellungen',
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
