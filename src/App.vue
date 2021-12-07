<template>
  <!-- <v-app>
    <v-navigation-drawer app> </v-navigation-drawer>
    <v-app-bar app> </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app> -->
  <v-app>
    <div class="itourist-app">
      <div class="itourist-app-wrapper">
        <nav class="itourist-app__side-nav">
          <v-img
            :src="require('./assets/logo-itourist.png')"
            class="mx-10"
            height="115"
          />
          <v-list-item-group v-model="selectedItem">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              active-class="itourist-app__side-nav-item--active"
              exact
              :ripple="false"
              :to="item.link"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon" color="#fdfefe"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.text"
                  :style="{
                    color: '#fdfefe',
                    fontWeight: 'bold',
                  }"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </nav>
        <header class="itourist-app__header">
          <h3>{{ getRouteName }}</h3>
          <div class="profile-avatar-container">
            <h3>Hi, Madana</h3>
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </div>
        </header>
        <main class="itourist-app__main">
          <router-view />
        </main>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    selectedItem: 1,
    items: [
      { text: "Dashboard", icon: "mdi-gauge", link: { name: "Home" } },
      {
        text: "Locations",
        icon: "mdi-map-marker",
        link: { name: "Locations" },
      },
      { text: "Users", icon: "mdi-account", link: { name: "Users" } },
      { text: "Reports", icon: "mdi-chart-arc", link: { name: "Reports" } },
      { text: "Settings", icon: "mdi-cog", link: { name: "Settings" } },
    ],
  }),

  computed: {
    getRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap");

html,
body,
.v-application * {
  font-family: "Nunito", sans-serif !important;
}

::-webkit-scrollbar {
  display: none;
}

.profile-avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.itourist-app__header {
  position: absolute;
  width: calc(100vw - 25px - 6px - 256px);
  height: 60px;
  top: 0;
  left: 256px;
  background-color: rgba(255, 255, 255, 0.959);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  z-index: 10000;
}

.itourist-app__main {
  height: 100%;
  width: calc(100vw - 25px - 6px - 256px);
  padding: 60px 10px 0 10px;
  overflow-y: scroll;
}

.itourist-app__side-nav {
  width: 256px;
  height: calc(100vh - 25px);
  background-color: #26727d;
}

.itourist-app__side-nav-item--active {
  background-color: #3695a0;
}

.itourist-app {
  background-color: #c8c8ce;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.itourist-app-wrapper {
  width: calc(100vw - 25px);
  height: calc(100vh - 25px);
  background-color: #edeef2;
  border: 3px solid white;
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  position: relative;
}
</style>
