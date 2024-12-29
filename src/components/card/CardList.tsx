import { useQuery } from "@tanstack/react-query";
import { getTrendingYoutube } from "../../services/api/FetchYoutube";
import Video from "./Video";
import { TVideoData } from "../../types/entities/Card";
import Loading from "../Loading";
import Error from "../Error";

const CardList = () => {
  const { data, isLoading, isError, isFetching, error } = useQuery({
    queryKey: ["trendingVideo"],
    queryFn: getTrendingYoutube,
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
        data.contents.map((item: TVideoData) => (
          <Video {...item.video} />
        ))
      ) : (
        <p className="text-center col-span-4">No videos found.</p>
      )}
    </div>
  );
};

export default CardList;
