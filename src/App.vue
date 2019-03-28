<template>
  <q-layout id="q-app" view="lHh Lpr lFf">
    <q-layout-header class="layout-header">
      <q-toolbar class="toolbar bg-primary">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-item class="logo">
          <img alt="Quasar logo" src="./assets/logo.png">
        </q-item>
      </q-toolbar>
    </q-layout-header>

    <!-- <q-layout-footer>
      <q-toolbar class="bg-secondary">
        <q-toolbar-title>Layout Footer</q-toolbar-title>
      </q-toolbar>
    </q-layout-footer>-->

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list no-border link inset-delimiter>
        <q-list no-border link inset-delimiter>
          <q-item class="sidemenu-link">Link 1</q-item>
          <q-item class="sidemenu-link">Link 2</q-item>
          <q-item class="sidemenu-link">Link 3</q-item>
          <q-item
            @click.native="openURL('http://quasar-framework.org')"
            class="sidemenu-link"
          >External Link</q-item>
        </q-list>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <HelloWorld/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "LayoutDefault",
  components: {
    HelloWorld
  },
  data() {
    return {
      // leftDrawerOpen: this.$q.platform.is.desktop,
      leftDrawerOpen: false
    };
  },
  methods: {
    openURL
  }
};
</script>

<style>
.logo img {
  max-width: 100%;
  height: auto;
  width: 30px;
}
</style>
