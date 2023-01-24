<template>
  <v-footer app>
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>