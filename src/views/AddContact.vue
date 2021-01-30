<template>
  <ion-page>
    <ion-content>
      <add-edit-contact @on-save="saveForm" />
    </ion-content>
  </ion-page>
</template>
<script>
import { IonPage, IonContent } from "@ionic/vue";
import AddEditContact from "../components/AddEditContact.vue";

import axios from "axios";

export default {
  name: "AddContact",
  components: {
    IonPage,
    IonContent,
    AddEditContact
  },

  methods: {
    saveForm(formdata) {
      axios({
        method: "post",
        url: "http://localhost:9190/createNewContact",
        data: formdata,
        headers: { "Content-Type": "application/json" }
      })
        .then(response => {
          console.log(response);
          this.$router.push({ name: "ContactsList" });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
