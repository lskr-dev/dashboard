const menuGroups = [
  {
    name: "admin",
    permission: "administrador",
    menuItems: [
      {
        icon: "",
        label: "users",
        route: "",
        children: [
          { label: "Criar", route: "/user/create" },
          { label: "Listar", route: "/user/list" },
        ],
      },
    ],
  },
];

export default menuGroups;
