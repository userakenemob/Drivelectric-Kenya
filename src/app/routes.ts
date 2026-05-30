import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { SolutionsPage } from "./pages/SolutionsPage";
import { SolutionDetailPage } from "./pages/SolutionDetailPage";
import { VehiclesPage } from "./pages/VehiclesPage";
import { FinancingPage } from "./pages/FinancingPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogArticlePage } from "./pages/BlogArticlePage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "solutions", Component: SolutionsPage },
      { path: "solutions/:id", Component: SolutionDetailPage },
      { path: "vehicles", Component: VehiclesPage },
      { path: "financing", Component: FinancingPage },
      { path: "projects", Component: ProjectsPage },
      { path: "projects/:slug", Component: ProjectDetailPage },
      { path: "blog", Component: BlogPage },
      { path: "blog/:slug", Component: BlogArticlePage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
