import millify from "millify";
import { TVideoCard } from "../../types/entities/Card";
import { MdVerified } from "react-icons/md";

const Video = ({ title, author, stats, videoId, thumbnails, publishedTimeText }: TVideoCard) => {
  return (
    <div
      key={videoId}
      className="rounded-xl hover:bg-primaryHover transition cursor-pointer bg-primary p-4 relative flex flex-col gap-3"
    >
      <img className="rounded-xl" src={thumbnails?.[0]?.url} alt={title} />
      <h3 className="text-white mt-2 line-clamp-2">{title}</h3>
      <div className="absolute top-44 left-8">
        <img
          src={author?.avatar?.[0]?.url}
          height={50}
          width={50}
          alt={author?.title}
          className="rounded-full"
        />
      </div>
      <h3 className="flex flex-row gap-2 items-center">
        {author?.title}
        {author?.badges?.[0]?.text === "Verified" ? (
          <span>
            <MdVerified color="white" />
          </span>
        ) : (
          ""
        )}
      </h3>
      <div className="flex gap-2 text-sm text-gray-400 items-center">
        <p className="">{millify(stats?.views)} Views</p>
        <span>.</span>
        <p>{publishedTimeText}</p>
      </div>
    </div>
  );
};

export default Video;
