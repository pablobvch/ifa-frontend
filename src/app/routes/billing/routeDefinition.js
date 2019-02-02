// @flow

export default [
  {
    path: "/billing",
    loader: () => import("./BillingPage"),
    isPrivate: false,
    exact: false
  }
];
