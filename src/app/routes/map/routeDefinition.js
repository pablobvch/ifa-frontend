// @flow

export default [
  {
    path: "/map",
    loader: () => import("./MapPage"),
    isPrivate: false,
    exact: false
  }
];
