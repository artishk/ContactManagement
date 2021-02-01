<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar color="light">
        <ion-avatar slot="start">
          <img src="https://picsum.photos/100" />
        </ion-avatar>
        <ion-title>{{ form.name }}</ion-title>
        <ion-title size="small">{{ form.company }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content color="favorite" fullscreen>
      <ion-fab color="light" vertical="top" horizontal="end" slot="fixed">
        <ion-fab-button color="light" @click="editContact">
          <ion-icon :icon="pencilOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <ion-card color="favorite">
        <ion-card-header color="favorite">
          <ion-item
            color="favorite"
            v-for="(mobile, $index) in form.mobile"
            :key="$index"
          >
            <ion-card-title
              >{{ mobile.value }}
              <ion-card-subtitle>{{ mobile.type }}</ion-card-subtitle>
            </ion-card-title>
          </ion-item>
          <ion-item
            color="favorite"
            v-for="(email, $index) in form.email"
            :key="$index"
          >
            <ion-card-title
              >{{ email.value }}
              <ion-card-subtitle>{{ email.type }}</ion-card-subtitle>
            </ion-card-title>
          </ion-item>
        </ion-card-header>
      </ion-card>
      <ion-fab vertical="center" horizontal="end" slot="fixed">
        <ion-fab-button color="danger" @click.prevent="delContact">
          <ion-icon :icon="trashBinOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonCard,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonItem,
  IonContent,
  IonCardSubtitle,
  IonCardHeader,
  IonCardTitle,
  IonAvatar,
  IonFab,
  IonFabButton,
  IonIcon
} from "@ionic/vue";
import { trashBinOutline, pencilOutline } from "ionicons/icons";

import axios from "axios";

export default {
  components: {
    IonPage,
    IonHeader,
    IonCard,
    IonItem,
    IonContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAvatar,
    IonToolbar,
    IonTitle,
    IonFab,
    IonFabButton,
    IonIcon
  },
  data() {
    return {
      trashBinOutline,
      pencilOutline,
      form: {}
    };
  },
  methods: {
    delContact() {
      const id = this.form.ID;
      axios
        .get("http://localhost:9190/deleteContactByID/" + id)
        .then(res => {
          console.log(res);
          let r = this.$router.resolve({ name: "ContactsList" })
          window.location.assign(r.href)
         
        })

        .catch(err => console.log(err));
    },

    editContact() {
      const userId = this.$route.params.id;
      this.$router.push({
        name: "EditContact",
        params: {
          id: userId
        }
      });
    }
  },
  mounted() {
    const userId = this.$route.params.id;
    axios
      .get("http://localhost:9190/getContactsByID/" + userId)
      .then(res => {
        this.form = res.data;
        console.log(this.form);
      })

      .catch(err => console.log(err));
  }
};
</script>
<style scoped></style>
