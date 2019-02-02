// @flow

import billingRouteDefinitions from "./routes/billing/routeDefinition";
import dashboardRouteDefinitions from "./routes/dashboard/routeDefinition";
import networkRouteDefinitions from "./routes/network/routeDefinition";
import mapRouteDefinitions from "./routes/map/routeDefinition";

export default [
  ...billingRouteDefinitions,
  ...dashboardRouteDefinitions,
  ...mapRouteDefinitions,
  ...networkRouteDefinitions
];
