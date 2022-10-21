<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script  >
import { IonApp, IonRouterOutlet  , toastController , alertController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  methods:{
     async toast(position,color,text) {
        const toast = await toastController.create({
          message: text,
          duration: 1500,
          position: position,
          color : color
        });

        await toast.present();
      },
      async alert (header , text ) {
        const alert = await alertController.create({
          header: header,
          message: text,
          buttons: ['تم'],
        });

        await alert.present();
      }
  },
  provide() {
    return {
          toast : this.toast,
          alert : this.alert
    }

  }
});
</script>