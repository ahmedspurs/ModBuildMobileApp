<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script  >
import {
  IonApp,
  IonRouterOutlet,
  toastController,
  alertController,
} from "@ionic/vue";

export default {
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  mounted() {
    this.$store.dispatch("fetchCategories");
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("getUser");
    this.$store.dispatch("fetchSubCategories");
  },
  methods: {
    async toast(position, color, text) {
      const toast = await toastController.create({
        message: text,
        duration: 1500,
        position: position,
        color: color,
      });

      await toast.present();
    },
    async alert(header, text) {
      const alert = await alertController.create({
        header: header,
        message: text,
        buttons: ["تم"],
      });

      await alert.present();
    },
  },
  provide() {
    return {
      toast: this.toast,
      alert: this.alert,
    };
  },
};
</script>
