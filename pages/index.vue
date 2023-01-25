<template>
  <div>Index</div>
  <v-btn @click="closeSocket"> Close </v-btn>
  <div class="">{{socketData.data}}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    const {$socket} = useNuxtApp();
    const socketData = reactive({data: ''})

    const closeSocket = () => {
        $socket.close()
    }
    
    onMounted(() => {
      $socket.onopen = () => {
        console.log("connection opened");
      };

      $socket.onmessage = ({ data }: any) => {
        socketData.data = data
        console.log('Got the message')
      };

      $socket.onclose = () => {
        console.log("disconnected");
      };

      console.log($socket);
    });

    return {
      socketData,
      closeSocket,
    };
  },
});
</script>

<style scoped>
</style>