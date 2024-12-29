import { useQuery } from "@tanstack/react-query";
import { getTrendingYoutube } from "../../services/api/FetchYoutube";
import Video from "./Video";
import { TVideoData } from "../../types/entities/Card";
import { useCategoryStore } from "../../zustand/categoryStore";
import {Error, Loading, NotFound} from "../";

const CardList = () => {
  const {categoryValue} = useCategoryStore()
  const { data, isLoading, isError, isFetching, error } = useQuery({
    queryKey: ["trendingVideo", categoryValue],
    queryFn: () => getTrendingYoutube(categoryValue),
    staleTime: 1000 * 60 * 1000,
    refetchOnWindowFocus: false
  });

  if (isLoading || isFetching) {
    return <Loading />
  }

  if (isError) {
    return (
      <Error error={error} />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
      {data?.contents?.length > 0 ? (
        data.contents.map((item: TVideoData, idx: number) => (
          <Video {...item.video} key={idx + item?.video?.videoId} />
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default CardList;
