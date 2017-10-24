<template>
  <modal>
    <!-- header -->
    <template slot="header">Login</template>

    <!-- content -->
    <div>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input">
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
  import Modal from './fragments/Modal';

  export default {
    components: {
      Modal,
    },
  };
</script>
