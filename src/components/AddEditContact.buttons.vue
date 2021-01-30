<template>
  <ion-page>
    <ion-fab horizontal="end" vertical="top" slot="fixed">
      <ion-fab-button color="warning" @click="$emit('on-save')">
        <ion-icon :icon="checkmarkOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <ion-fab horizontal="start" vertical="top" slot="fixed">
      <ion-fab-button color="warning" @click="$emit('go-back')">
        <ion-icon :icon="arrowBackOutline" ></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script>
import { IonPage, IonIcon, IonFab, IonFabButton } from "@ionic/vue";
import {checkmarkOutline,arrowBackOutline} from "ionicons/icons";

export default {
  name: "AddEditContact.buttons",
  components: {
    IonPage,
    IonIcon,
    IonFab,
    IonFabButton,
    
   
  },
  data(){
return{
  checkmarkOutline,
  arrowBackOutline
}
  },
  
};
</script>
