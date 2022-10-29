import { MeetTheTeam } from "./pages/MeetTheTeam";
import { createBrowserRouter } from "react-router-dom";
import { Error } from "./components/Error";
import { E404 } from "./components/E404";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "pages",
          children: [
            {
              path: "meet-the-team",
              element: <MeetTheTeam />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <E404 />,
    },
  ]);