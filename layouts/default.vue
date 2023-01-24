<template>
    <v-app dark>
      <Header />
      <v-main>
        <v-container>
            <slot />
        </v-container>
      </v-main>
      <Footer />
    </v-app>
  </template>