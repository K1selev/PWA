import { createRouter, createWebHistory } from 'vue-router';
import RentalCatalog from '@/pages/RentalCatalog.vue';
import OrderCheckout from '@/pages/OrderCheckout.vue';
import OrderConfirmation from '@/pages/OrderConfirmation.vue';

const routes = [
    { path: '/catalog', component: RentalCatalog },
    { path: '/checkout', component: OrderCheckout },
    { path: '/confirm', component: OrderConfirmation },
    { path: '/', redirect: '/catalog' },
  ];

export default createRouter({
  history: createWebHistory(),
  routes,
});
