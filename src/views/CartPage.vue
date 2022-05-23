<template>
  <ion-page>
    <ion-header>
      <div class="flex items-cnter justify-between px-4">
        <h2>سله التسوق</h2>
        <div class="flex items-center">
          <div class="p-3">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
              class="w-12 rounded-full mt-2 mx-2"
            />
          </div>
        </div>
      </div>
    </ion-header>
    <ion-content>
        <div class="cart">
            <div class="flex justify-between items-center p-4" :key="item" v-for="item in 4">
                <div class="w-3/4">
                    <img class="w-24 h-24" src="http://www.unitycement.com/site-Ar/wp-content/uploads/2017/11/%D8%A8%D9%88%D8%B1%D8%AA%D9%84%D8%A7%D9%86%D8%AF%D9%8A-%D8%B9%D8%A7%D8%AF%D9%8A1.png" alt="">
                </div>
                <div class="w-full">
                    <h2 class="block">مفك براغي</h2>
                    <span class="text-blue-500 font-semibold block text-xl pb-2">125.99$</span>
                    <div class="flex">
                        <button class="bg-gray-300 text-black rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg>
                        </button>
                        <input class="w-8 text-center" type="text" value="1">
                        <button class="bg-gray-300 text-black rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
</svg>
                        </button>
                    </div>
                </div>
            </div>          
        </div>

                <!-- total price section -->

        <div class="total-price">
          <ion-card>
            <ion-card-content>
              <div class="products flex justify-between">
                <ion-text color="dark">
                  <b>ملخص الطبيه</b>
                </ion-text>
                <ion-text color="dark">
                  <b>3 منتجات</b>
                </ion-text>
              </div>
              <div class="products flex justify-between">
                <ion-text color="dark">
                  <span>رسوم التوصيل</span>
                </ion-text>
                <ion-text color="dark">
                  <span>50$</span>
                </ion-text>
              </div>
              <div class="products flex justify-between">
                <ion-text color="dark">
                  <span>المجموع الكلي</span>
                </ion-text>
                <ion-text color="dark">
                  <span>550.99$</span>
                </ion-text>
              </div>
            </ion-card-content>
          </ion-card>
        </div>

        <!-- checkout section -->
        <div class="checkout p-2">
          <router-link to="/tabs/CheckoutPage/">
            <ion-button expand="full">اتمام الطلب</ion-button>
          </router-link>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage , IonHeader , IonContent , IonCard , IonCardContent, IonButton,IonText} from "@ionic/vue"
export default {
  name: "CartPage",
  components :{
    IonPage, IonHeader , IonContent , IonCard , IonCardContent, IonButton,IonText
  }
};
</script>

<style>
</style>