// @flow

export default [
  {
    path: "/network",
    loader: () => import("./NetworkPage"),
    isPrivate: false,
    exact: false
  }
];
