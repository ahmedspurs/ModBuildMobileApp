<template>
  <ion-page>
    <ion-header>
      <div class="flex items-cnter justify-between px-4">
        <h2>الاقسام</h2>
        <div class="flex items-center">
          <div class="p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </ion-header>
    <ion-content>
      <div class="grid grid-cols-2 gap-4 p-4" :key="item" v-for="item in 3">
        <div class="card">
          <ion-card class="shadow-none">
          <router-link to="/tabs/SubCategory">
            <img
              src="data:image/png;base64,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"
              alt=""
              class="h-36 w-full"

            />
              </router-link>
            <h2 class="text-center">اسمنت</h2>
          </ion-card>
        </div>

        <!-- 2 -->

        <div class="card">
          <ion-card class="shadow-none">
          <router-link to="/tabs/SubCategory">

            <img
              src="https://www.svgrepo.com/show/268190/plumbering-faucet.svg"
              class="h-36 w-full"
              alt=""
            />
          </router-link>
            <h2 class="text-center">مواد سباكه</h2>
          </ion-card>
        </div>


        <!-- 3 -->

          <div class="card">
          <ion-card class="shadow-none">
          <router-link to="/tabs/SubCategory">

            <img
              src="https://www.svgrepo.com/show/30043/building.svg"
              class="h-36 w-full"
              alt=""
            />
          </router-link>
            <h2 class="text-center">مواد بناء</h2>
          </ion-card>
        </div>

        
        <!-- 4 -->

          <div class="card">
          <ion-card class="shadow-none">
          <router-link to="/tabs/SubCategory">

            <img
              src="https://www.svgrepo.com/show/380268/tool-equipment.svg"
              class="h-36 w-full"
              alt=""
            />
          </router-link>
            <h2 class="text-center"> المعدات</h2>
          </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonHeader, IonCard } from "@ionic/vue";
import {mapGetters} from "vuex"
import { ref } from "vue";

export default {
  name: "CategoryPage",
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonCard,
  },
  computed : mapGetters["categories"],
  setup() {
    const accordionGroup = ref();
    return {
      accordionGroup,
    };
  },
};
</script>

<style>
</style>