<template>
  <div class="index__orderBook">
    <OrderBook/>
  </div>

  
  <v-btn @click="closeSocket"> Close </v-btn>
  <div class="">{{ socketData.data }}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import OrderBook from "~~/components/OrderBook.vue";
import { useOrderBookStore } from "~~/stores/orderBook";

export default defineComponent({
  components: { OrderBook },
  setup() {
    const store = useOrderBookStore();

    const { $socket } = useNuxtApp();
    const socketData = reactive({ data: "" });

    store.init();

    const closeSocket = () => {
      $socket.close();
    };

    onMounted(() => {
      $socket.onopen = () => {
        console.log("connection opened");
      };

      $socket.onmessage = ({ data }: any) => {
        socketData.data = data;
      };

      $socket.onclose = () => {
        console.log("disconnected");
      };
    });

    return {
      socketData,
      closeSocket,
      store,
    };
  },
});
</script>

<style>
</style>