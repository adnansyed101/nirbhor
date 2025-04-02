interface NavItem {
  id: number;
  path: string;
  label: string;
}

const navigation: NavItem[] = [
  {
    id: 1,
    path: "/",
    label: "Home",
  },
  {
    id: 2,
    path: "/about",
    label: "About",
  },
  {
    id: 3,
    path: "/contact",
    label: "Contact",
  },
  {
    id: 4,
    path: "/dashboard",
    label: "Dashboard",
  },
];

export { navigation };
