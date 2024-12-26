import { createRouter, createWebHistory } from 'vue-router';
import RentalCatalog from '@/pages/RentalCatalog.vue';
import OrderCheckout from '@/pages/OrderCheckout.vue';
import OrderConfirmation from '@/pages/OrderConfirmation.vue';

const routes = [
    { path: '/', component: RentalCatalog },
    { path: '/checkout', component: OrderCheckout },
    { path: '/confirm', component: OrderConfirmation },
  ];

export default createRouter({
  history: createWebHistory(),
  routes,
});
