// @flow
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Loadable from "react-loadable";
import React from "react";

import type {PageConfig} from "react-router";

import Loading from "../loading";

type RouteDefinition = {|
  exact?: boolean,
  isPrivate: boolean,
  path: string,
  loader: () => Promise<PageConfig<any>>,
  map: Function
|};

type Props = {|
  routeDefinitions: RouteDefinition
|};

const getLoadable = ({loader}) => Loadable({loader, loading: Loading});

const renderRoute = (RouteComponent, routeDefinition, index) => (
  <RouteComponent
    key={`menuroute_${index}`}
    exact={routeDefinition.exact}
    path={routeDefinition.path}
    component={getLoadable(routeDefinition)}
  />
);

const renderRouteFrom = (routeDefinition, index) =>
  renderRoute(Route, routeDefinition, index);

const renderRoutes = ({routeDefinitions}) =>
  routeDefinitions.map(renderRouteFrom);

const Router = (props: Props) => (
  <BrowserRouter>
    <Switch>{renderRoutes(props)}</Switch>
  </BrowserRouter>
);

export default Router;
