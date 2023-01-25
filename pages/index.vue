<template>
  <div>Index</div>
</template>

<script setup lang="ts">
// setup() {

//     console.log($socket);

//     return {};
//   },
const { $socket } = useNuxtApp();
onMounted(() => {
  $socket.onopen = () => {
    console.log("connection opened");
  };

  $socket.onmessage = ({ data }: any) => {
    console.log("data: ", data);
  };

  $socket.onclose = () => {
    console.log("disconnected");
  };
});
</script>

<style scoped>
</style>