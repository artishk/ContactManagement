<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="warning">
        <ion-title>
          My Contacts
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-fab vertical="top" horizontal="end" slot="fixed">
        <ion-fab-button @click="addContact">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <contact-list-item :contacts="contacts" @show-contact="showContact" />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon
} from "@ionic/vue";
import ContactListItem from "../components/ContactsList.item.vue";
import axios from "axios";
import {add} from "ionicons/icons";
export default {
  name: "ContactList",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    ContactListItem,
    IonFab,
    IonFabButton,
    IonIcon
  },
  data() {
    return {
      contacts: [],
   add
    };
  },
  methods: {
    addContact() {
      this.$router.push({
        name: "AddContact"
      });
    },

    showContact(id) {
      this.$router.push({
        name: "ShowContact.card",
        params: {
          id: id
        }
      });
    }
  },

  mounted() {
    axios
      .get("http://localhost:9190/getAllContacts")
      .then(res => {
        this.contacts = res.data;
      })
      .catch(err => console.log(err));
  }
};
</script>
<style scoped>
</style>
