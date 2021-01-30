import { createRouter, createWebHistory } from '@ionic/vue-router';
import ContactsList from '../views/ContactsList.vue';
import ShowContactCard from '../views/ShowContact.card.vue';
import AddContact from '../views/AddContact.vue';
import EditContact from '../views/EditContact.vue';
const routes = [
  // {
  //   path: '/',
  //   redirect: '/ContactsList'
  // },
  {
    path:'/ContactsList',
    component:ContactsList,
    name:"ContactsList"
  },
  {
    path:'/ShowContactCard/:id',
    component:ShowContactCard,
    name:"ShowContact.card"
  },
  {
    path:'/AddContact',
    component:AddContact,
    name:"AddContact"
  },
  {
    path:'/EditContact/:id',
    component:EditContact,
    name:"EditContact"
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
