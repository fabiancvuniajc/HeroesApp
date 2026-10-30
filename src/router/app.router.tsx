import { AdminLayout } from "@/admin/layout/AdminLayout";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/layout/HeroesLayout";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";


// eslint-disable-next-line react-refresh/only-export-components
const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage").then(module => ({ default: module.SearchPage })));

export const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "heroes/:idSlug",
        element: <HeroPage />
      },
      {
        path: "search",
        element: <SearchPage />
      },

      {
        path: '*',
        element: <Navigate to="/" />
      }
    ]
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />
      }
    ],
  }
]);