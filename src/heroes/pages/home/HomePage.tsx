import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "../search/ui/SearchControls";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron title="Bienvenido a la App de Heroes" description="Aquí encontrarás todos los héroes que buscas." />
      <CustomBreadcrumbs currentPage="Super Héroes" />
      <HeroStats />
      <SearchControls />

      <HeroGrid />

      <CustomPagination totalPages={10}/>
    </>
  );
};
