<template>
  <ion-page>
    <ion-content>
      <ion-list v-for="(contact,$index) in contacts" :key="$index">
        <ion-item @click="$emit('show-contact',contact.ID)">
          <ion-avatar slot="start">
         <img src="https://picsum.photos/100" >
          </ion-avatar>
          <ion-label>{{ contact.name }}</ion-label></ion-item
        >
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonAvatar,
  IonContent,
  IonList,
  IonItem,
  IonLabel
} from "@ionic/vue";

export default {
  name: "ContactList.item",
  components: {
    IonPage,

    IonAvatar,

    IonContent,
    IonList,
    IonItem,
    IonLabel
  },
  props: {
    contacts: {
      type: Array,
      required: true
    }
  },
  computed: {
    getNameInititals() {
      return this.contacts.name
        .toUpperCase()
        .split(" ")
        .map(name => name[0])
        .join("");
    },
    getRandomColor() {
      return (
        "#" +
        Math.floor(Math.random() * 2 ** 24)
          .toString(16)
          .padStart(6, "0")
      );
    }
  }
};
</script>

<style scoped>

</style>
