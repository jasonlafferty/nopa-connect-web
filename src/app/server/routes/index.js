import apiRoutes from './api';
import reactRoutes from './react';

export default function (app) {

  // Render server-side API
  apiRoutes(app); // Should come first before the react renderer

  // Render React
  reactRoutes(app);
}
