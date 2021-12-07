<template>
  <div class="my-2">
    <h3>App Overview</h3>
    <v-row>
      <v-col
        lg="2"
        cols="sm"
        class="px-2"
        v-for="(item, i) in cardData"
        :key="i"
      >
        <v-card class="itourist-app-card">
          <v-row class="no-gutters" justify-content="center">
            <div
              class="d-flex align-center justify-center flex-grow-1 flex-column py-2"
            >
              <h1 class="itourist-app-card__count">{{ item.count }}</h1>
              <h5 class="text-truncate itourist-app-card__text">
                {{ item.title }}
              </h5>
            </div>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
  data: () => ({
    cardData: [
      { title: "Active Users", count: "33" },
      { title: "Total App installed", count: "620" },
      { title: "Android Installed", count: "500" },
      { title: "IOS Installed", count: "120" },
      { title: "Total Users", count: "640" },
      { title: "Locations", count: "338" },
    ],
  }),
};
</script>

<style scoped>
.itourist-app-card {
  border-radius: 15px !important;
}

.itourist-app-card__count {
  color: #338c95;
  font-size: 30px;
  line-height: 38px;
}

.itourist-app-card__text {
  color: #393939;
  font-size: 15px;
  font-weight: 800;
}
</style>
