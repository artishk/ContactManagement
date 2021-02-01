<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="favorite">
        <ion-buttons slot="start">
          <ion-button shape="round" @click.prevent ="goBack">
            <ion-icon :icon="arrowBackOutline" ></ion-icon> 
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button shape="round" @click.prevent="$emit('on-save',form)">
            <ion-icon :icon="checkmarkOutline"></ion-icon> 
            </ion-button>
        </ion-buttons>
      
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-avatar>
        <img
          src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg"
        />
      </ion-avatar>

      <ion-item>
        <ion-input v-model="form.name" placeholder="Enter Name"> </ion-input>
      </ion-item>
      <ion-item>
        <ion-input v-model="form.company" placeholder="Enter Company Name">
        </ion-input>
      </ion-item>

      <ion-item v-for="(email, $index) in form.email" :key="$index">
        <ion-select placeholder="Email" v-model="email.type">
          <ion-select-option value="home">Home</ion-select-option>
          <ion-select-option value="work">Work</ion-select-option>
        </ion-select>
        <ion-input v-model="email.value" placeholder="Enter UserID"></ion-input>
        <ion-button shape="round" color="light" @click="addEmail()"
          >+</ion-button
        >
      </ion-item>

      <ion-item v-for="(mobile, $pindex) in form.mobile" :key="$pindex">
        <ion-select placeholder="Mobile" v-model="mobile.type">
          <ion-select-option value="home">Home</ion-select-option>
          <ion-select-option value="work">Work</ion-select-option>
        </ion-select>
        <ion-input
          v-model="mobile.value"
          placeholder="Enter number"
        ></ion-input>
        <ion-button shape="round" color="light" @click="addMobile"
          >+</ion-button
        >
      </ion-item>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonInput,
  IonItem,
   IonIcon,
  IonAvatar,
  IonSelect,
  IonSelectOption,
  IonButton,IonButtons
} from "@ionic/vue";
import {checkmarkOutline,arrowBackOutline} from "ionicons/icons";
// import AddEditContactButtons from "./AddEditContact.buttons.vue";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
export default {
  name: "AddEditContact",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonInput,
    IonItem,
    IonAvatar,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonIcon,
    IonButtons,
 
  },

  data() {
    return {
      form: {
        ID: uuidv4(),
        name: "",
        company: "",
        email: [
          {
            type: "",
            value: ""
          }
        ],
        mobile: [
          {
            type: "",
            value: ""
          }
        ]
      },
      checkmarkOutline,
      arrowBackOutline
    };
  },
  methods: {
    goBack() {
      this.$router.push({
        name: "ContactsList"
      });
    },
    addMobile() {
      this.form.mobile.push({
        type: "",
        value: ""
      });
    },
    addEmail() {
      this.form.email.push({
        type: "",
        value: ""
      });
    }
  },
  mounted() {
    if (this.$route.params.id) {
      const userId = this.$route.params.id;

      axios
        .get("http://localhost:9190/getContactsByID/" + userId)
        .then(res => {
          this.form = res.data;
          console.log(this.form);
        })

        .catch(err => console.log(err));
    }
  }
};
</script>
<style scoped>
ion-avatar {
  margin: 10px auto;
}
</style>
