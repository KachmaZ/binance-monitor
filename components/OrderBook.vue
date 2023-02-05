<template>
  <div class="orderBook">
    <!-- HEADERS -->
    <v-table class="orderBook__headers">
      <template v-slot:default>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Amount</th>
          </tr>
        </thead>
      </template>
    </v-table>

    <!-- BIDS -->
    <v-table class="orderBook__bids" height="220px">
      <template v-slot:default>
        <tbody>
          <tr style="background: red" v-for="bid in store.getBook.bids">
            <td>{{ bid[0] }}</td>
            <td>{{ bid[1] }}</td>
          </tr>
        </tbody>
      </template>
    </v-table>

    <!-- ASKS -->
    <v-table class="orderBook__asks" height="220px">
      <template v-slot:default>
        <tbody>
          <tr style="background: green" v-for="asks in store.getBook.asks">
            <td>{{ asks[0] }}</td>
            <td>{{ asks[1] }}</td>
          </tr>
        </tbody>
      </template>
    </v-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useOrderBookStore } from "~~/stores/orderBook";

export default defineComponent({
  setup() {
    const store = useOrderBookStore();

    return {
      store,
    };
  },
});
</script>

<style lang="scss" scoped>
.orderBook {
  width: 400px;

  td {
    width: 50%;
    height: 24px !important;
  }
}
</style>