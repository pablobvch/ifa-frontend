// @flow

import billingRouteDefinitions from "./routes/billing/routeDefinition";
import dashboardRouteDefinitions from "./routes/dashboard/routeDefinition";
import networkRouteDefinitions from "./routes/network/routeDefinition";

export default [
  ...billingRouteDefinitions,
  ...dashboardRouteDefinitions,
  ...networkRouteDefinitions
];
