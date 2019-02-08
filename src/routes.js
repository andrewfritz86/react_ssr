import Home from "./components/Home";
import Account from "./components/Account";
import NearbyStores from "./components/NearbyStores";

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/nearby-stores",
    component: NearbyStores,
    exact: true
  },
  {
    path: "/account",
    component: Account,
    exact: true
  }
];
