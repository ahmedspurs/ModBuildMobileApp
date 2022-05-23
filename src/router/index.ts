import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
import HomePage from "../views/HomePage.vue";
import CategoryPage from "../views/CategoryPage.vue";
import CartPage from "../views/CartPage.vue";
import ContactPage from "../views/ContactPage.vue";
import ProfilePage from "../views/ProfilePage.vue";
import EditProfile from "../views/EditProfile.vue";
import LastOrders from "../views/LastOrders.vue";
import ProductsPage from "../views/ProductsPage.vue";
import ProducPage from "../views/ProducPage.vue";
import CheckoutPage from "../views/CheckoutPage.vue";
import OrderDetails from "../views/OrderDetails.vue";
import LastOrder from "../views/LastOrder.vue";
import SubCategory from "../views/SubCategory.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/HomePage"
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/HomePage"
      },
      {
        path: "HomePage",
        component: HomePage
      },
      {
        path: "CategoryPage",
        component: CategoryPage
      },
      {
        path: "SubCategory",
        component: SubCategory
      },
      {
        path: "ProductsPage",
        component: ProductsPage
      },
      {
        path: "ProducPage",
        component: ProducPage
      },
      {
        path: "CartPage",
        component: CartPage
      },
      {
        path: "ContactPage",
        component: ContactPage
      },
      {
        path: "LastOrders",
        component: LastOrders
      },
      {
        path: "CheckoutPage",
        component: CheckoutPage
      },
      {
        path: "OrderDetails",
        component: OrderDetails
      },
      {
        path: "LastOrder",
        component: LastOrder
      },
      {
        path: "ProfilePage",
        component: ProfilePage
      },
      { path: "EditProfile", component: EditProfile }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
