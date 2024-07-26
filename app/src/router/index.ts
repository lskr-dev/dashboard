import { createRouter, createWebHistory } from "vue-router";

const routes = [
  /** MAIN */
  {
    path: "/",
    name: "Pagína inicial",
    component: () => import("@/views/Dashboard/DashboardHomeView.vue"),
    meta: {
      title: "dashboard",
    },
  },
  /** MAIN */

  /** USUARIO */
  {
    path: "/user/create",
    name: "Criação de usuários",
    component: () => import("@/views/Users/CreateUserView.vue"),
    meta: {
      title: "create-user",
    },
  },
  {
    path: "/user/list",
    name: "Lista de usuários",
    component: () => import("@/views/Users/ListUserView.vue"),
    meta: {
      title: "list-user",
    },
  },
  /** USUARIO */
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = `Dashboard | LskrDev`;
  next();
});

export default router;
