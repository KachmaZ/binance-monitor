<template>
  <v-app-bar clipped-left fixed app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" clipped fixed app>
    <v-list nav lines="one">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template> 
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      items: [
        {
          icon: "mdi-table",
          title: "Биржа",
          to: "/",
        },
        {
          icon: "mdi-cash-multiple",
          title: "Валюта",
          to: "/currency",
        },
      ],
    };
  },

  data() {
    return {
      drawer: false,
    };
  },
});
</script>

<style scoped>
</style>