<template>
  <ion-page class="bg-blue-50">
    <loading-spinner v-show="Loading" />
    <ion-content v-show="!Loading">
      <!-- header section -->
      <div class="header bg-blue-500 text-white py-4 rounded-b-2xl">
        <div class="flex items-cnter justify-between px-4">
          <div class="flex">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
              class="w-12 rounded-full mt-2 mx-2"
            />
            <h2>مرحبا, <span class="text-xl">أحمد</span></h2>
          </div>
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
        <h2 class="text-center">نتمني لك يوما سعيدا</h2>
        <p class="text-center p-2">ابحث عن مغلق او منتج</p>
      </div>
      <!-- search -->
      <div class="flex justify-center items-center -mt-4">
        <div class="flex w-3/4" dir="rtl">
          <button class="bg-white p-2 rounded-r-2xl shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <input
            type="text"
            class="rounded-l-2xl w-full outline-none shadow-xl"
            placeholder="بحث"
          />
        </div>
      </div>
      <!-- categoris section -->
      <div class="flex px-4 justify-between items-center">
        <ion-text>
          <h1 class="font-semibold">الاقسام</h1>
        </ion-text>
        <ion-text class="flex items-center">
          <router-link to="/tabs/CategoryPage">
            <h3 class="text-sm mt-8">عرض الكل</h3>
          </router-link>
        </ion-text>
      </div>

      <swiper class="cats" :options="{ slidesPerView: 2.5 }">
        <swiper-slide class="px-2" v-for="item in allProducts" :key="item.id">
        
          <router-link to="/tabs/ProductsPage">
            <ion-card class="shadow-none w-full">
              <img
                src="https://www.pngplay.com/wp-content/uploads/12/Screwdriver-Transparent-Free-PNG-Clip-Art.png"
                alt=""
                height="100"
                class="rounded-xl h-56 w-full"
              />

              <ion-card-content>
                <ion-text class="text-center">
                
                  <span class="font-semibold"> {{item?.name}}</span>

                </ion-text>
              </ion-card-content>
            </ion-card>
          </router-link>

        </swiper-slide>

      </swiper>

      <!-- leatest products -->
      <div class="flex px-4 justify-between items-center">
        <ion-text>
          <h1 class="font-semibold">احدث المنتجات</h1>
        </ion-text>
        <ion-text class="flex items-center">
          <router-link to="/tabs/ProductsPage">
            <h3 class="text-sm mt-8">عرض الكل</h3>
          </router-link>
        </ion-text>
      </div>
      <ion-slides class="p-2 leatest" :options="{ slidesPerView: 1.5 }">
        <ion-slide class="p-2" :key="item.id" v-for="item in 5">
          <div class="border border-gray-300 rounded-xl p-6 relative">
            <router-link to="/tabs/ProducPage">
              <img
                class=""
                src="https://www.pngplay.com/wp-content/uploads/12/Screwdriver-Transparent-Free-PNG-Clip-Art.png"
                alt=""
              />
            </router-link>

            <div class="text-right">
              <span class="block font-semibold">مفك براغي</span>
              <span class="block">مغلق احمد</span>
              <span class="text-blue-500 font-semibold block pt-2">150$</span>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 absolute top-2 right-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              @click="showAlert()"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </ion-slide>
      </ion-slides>

      <!-- best sales -->
      <div class="flex px-4 justify-between items-center">
        <ion-text>
          <h1 class="font-semibold">الاكثر مبيعا</h1>
        </ion-text>
        <ion-text class="flex items-center">
          <router-link to="/tabs/ProductsPage">
            <h3 class="text-sm mt-8">عرض الكل</h3>
          </router-link>
        </ion-text>
      </div>

      <swiper class="p-2 leatest" :options="{ slidesPerView: 1.5 }">
        <swiper-slide class="p-2" :key="item?.id" v-for="item in allProducts">

          <div class="border border-gray-300 rounded-xl p-6 relative">
            <router-link :to="`/tabs/ProducPage/${item?.id}`">
              <img
                class=""
                src="https://www.pngplay.com/wp-content/uploads/12/Screwdriver-Transparent-Free-PNG-Clip-Art.png"
                alt=""
              />
            </router-link>

            <div class="text-right">
              <span class="block font-semibold"> {{item?.name}}</span>
              <span class="block"> {{item?.user?.name}}</span>
              <span class="text-blue-500 font-semibold block pt-2">{{item?.price}}$</span>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 absolute top-2 right-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonSlide,
  IonSlides,
  IonCard,
  IonCardContent,
  IonText,
} from "@ionic/vue";
  import { Swiper, SwiperSlide } from 'swiper/vue';

import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    IonPage,
    IonContent,
    IonSlide,
    IonSlides,
    IonCard,
    IonCardContent,
    IonText,
    LoadingSpinner,Swiper, SwiperSlide
  },
  data() {
    return {
      Loading: true,
      categories : [],
      products :[]
    };
  },
  created() {
    setTimeout(() => {
      this.Loading = !this.Loading;
    }, 2000);
    this.$store.dispatch("fetchCategories");
  },
  computed: {
    ...mapGetters(["allProducts", "allCategories", "allSubCategories"]),
  },
  mounted(){
        this.categories = this.allSubCategories
    this.products = this.allProducts
  },
  computed: mapGetters(["allProducts", "allCategories", "allSubCategories"]),
  methods: {
    showAlert() {
      this.toast("top", "success", "تم اضافه العنصر الي المفضله");
    },
  },
  inject: ["toast"],
};
</script>

<style></style>
