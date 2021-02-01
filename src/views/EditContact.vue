<template>
  <ion-page>
    <ion-content>
      <add-edit-contact @on-save="updateContact" />
    </ion-content>
  </ion-page>
</template>
<script>
import { IonPage, IonContent } from "@ionic/vue";
import AddEditContact from "../components/AddEditContact.vue";
import axios from "axios";

export default {
  name: "EditContact",
  components: {
    IonPage,

    IonContent,

    AddEditContact
  },

  methods: {
    updateContact(formdata) {
      const userId = this.$route.params.id;
      axios({
        method: "post",
        url: "http://localhost:9190/updateContactByID/" + userId,
        data: formdata,
        headers: { "Content-Type": "application/json" }
      })
        .then(response => {
          console.log(response);
         let r = this.$router.resolve({ name: "ContactsList" })
          window.location.assign(r.href)
         
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
 
};
</script>
