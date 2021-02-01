<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="favorite">
        <ion-title>
          My Contacts
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-toolbar>
      <ion-searchbar
      v-model="names"
      clear-icon="close-sharp"
      placeholder="Search by Name"
      inputmode="text"
      enterkeyhint= "search"
      @ionInput ="searchName"
      ></ion-searchbar>
     
    </ion-toolbar>
    <ion-content>
      <ion-fab vertical="top" horizontal="end" slot="fixed">
        <ion-fab-button color="favorite-tint" @click.prevent="addContact">
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
  IonIcon,
  IonSearchbar
} from "@ionic/vue";
import ContactListItem from "../components/ContactsList.item.vue";
import axios from "axios";
import { add } from "ionicons/icons";
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
    IonIcon,
    IonSearchbar
  },
  data() {
    return {
      contacts: [],
      add,
      names:""
     
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
    },
    searchName() {
    console.log(this.names);
      console.log(this.contacts.filter(contact => contact.name.toLowerCase().includes(this.names)));
     
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
ion-icon {
  --ionicon-stroke-width: 40px;
  color: black;
}
ion-searchbar {
  --border-radius: 80px;
}
ion-toolbar {
  --padding-top: 20px;
  --padding-bottom: 20px;
  --padding-start: 20px;
  --padding-end: 20px;
}
</style>
