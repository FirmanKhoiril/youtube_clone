import millify from "millify";
import { TVideoCard } from "../../types/entities/Card";
import { MdVerified } from "react-icons/md";

const Video = ({
  title,
  author,
  stats,
  videoId,
  thumbnails,
  publishedTimeText,
}: TVideoCard) => {
  return (
    <div
      key={videoId}
      className="rounded-xl hover:bg-primaryHover transition cursor-pointer bg-primary p-4 flex flex-col gap-2 overflow-hidden"
    >
      <div className="relative">
        <img
          className="rounded-xl"
          src={thumbnails?.[0]?.url || "https://placehold.co/500x280"}
          alt={title}
        />
        <div className="absolute top-[170px] left-6">
          <img
            src={
              author?.avatar?.[0]?.url ||
              "https://lh3.googleusercontent.com/a/ACg8ocKkaqJE6dW79KMxmlmwuTs-7XSKb3T-anBS8FL31yAnT5t_cg=s288-c-no"
            }
            height={50}
            width={50}
            alt={author?.title || "Firman Khoiril"}
            className="rounded-full"
          />
        </div>
      </div>
      <h3 className="text-white mt-2 line-clamp-2">
        {title || "There's error fail to load data"}
      </h3>

      <h3 className="flex flex-row gap-2 items-center">
        {author?.title || "Firman Khoiril"}
        {author?.badges?.[0]?.text === "Verified" ? (
          <span>
            <MdVerified color="white" />
          </span>
        ) : (
          ""
        )}
      </h3>
      <div className="flex gap-2 text-sm text-gray-400 items-center">
        <p className="">{millify(stats?.views || 1)} Views</p>
        <span>.</span>
        <p>{publishedTimeText}</p>
      </div>
    </div>
  );
};

export default Video;
