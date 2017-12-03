<template>
  <footer class="footer is-hidden-desktop">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <i class="fa fa-plug" aria-hidden="true"></i>
          <label>&nbsp;Fridge {{ fridgeStatus }}</label><br>
          <i class="fa fa-thermometer-quarter" aria-hidden="true"></i>
          : <span style="color: #0000ff;">{{ frigeTemperature }}°C</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    props: ['frigeTemperature', 'fridgeStatus'],
  };
</script>

<style>
  .footer {
    margin-top: 1rem;
  }
</style>
