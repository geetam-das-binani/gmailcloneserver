import { lazy } from "react";

const App = lazy(() => import("../App"));
const Emails = lazy(() => import("../components/Emails"));
const ViewEmails = lazy(() => import("../components/ViewEmails"));

export const routes = {
  main: {
    path: "/",
    element: <App />,
  },
  emails: {
    path: "/emails",
    element: <Emails />,
  },
  view: {
    path: "/view",
    element: <ViewEmails />,
  },
  invalid: {
    path: "*",
    element: Emails,
  },
};
