// @flow

export default [
  {
    path: "/",
    loader: () => import("./DashboardPage"),
    isPrivate: false,
    exact: true
  }
];
