import {
  Home,
  icons,
  Info,
  Mail,
  Search,
  Settings,
  ShoppingBag,
  User,
} from "lucide-react";

export const navigation = [
  {
    title: "Домой",
    icon: Home,
    link: "/",
  },
  {
    title: "Поиск",
    icon: Search,
    link: "/search",
  },
  {
    title: "Корзина",
    icon: ShoppingBag,
    link: "/cart",
  },
  {
    title: "Профиль",
    icon: User,
    link: "/",
  },
];

export const others = [
  {
    title: "Настройки",
    icon: Home,
    link: "/",
  },
  {
    title: "Поддержка",
    icon: Mail,
    link: "/",
  },
  {
    title: "О нас",
    icon: Info,
    link: "/",
  },
];
