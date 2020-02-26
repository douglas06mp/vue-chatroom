<template>
  <div class="media align-items-center px-3">
    <img
      src="https://img.icons8.com/material/50/000000/user-male-circle--v1.png"
      class="mr-2"
    />
    <div class="media-body">
      <h3>{{ user }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: { user: String }
};
</script>
