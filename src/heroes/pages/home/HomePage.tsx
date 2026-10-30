import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "../search/ui/SearchControls";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";
import { useQuery } from "@tanstack/react-query";

export const HomePage = () => {


  const { data } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  console.log({ data });

  /*useEffect(() => {
    getHeroesByPageAction();
  }, []);*/


  return (
    <>
      <CustomJumbotron title="Bienvenido a la App de Heroes" description="Aquí encontrarás todos los héroes que buscas." />
      <CustomBreadcrumbs currentPage="Super Héroes" />
      <HeroStats />
      <SearchControls />

      <HeroGrid heroes={data?.heroes ?? []} />

      <CustomPagination totalPages={10} />
    </>
  );
};
