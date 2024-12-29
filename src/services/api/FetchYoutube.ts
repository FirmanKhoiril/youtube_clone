import axios from "axios";

const Base_url = "https://youtube-v31.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v38.p.rapidapi.com",
  },
};

const FetchYoutube = async (url: string) => {
  const { data } = await axios(`${Base_url}/${url}`, options);
  return data;
};

export const getTrendingYoutube = async (categoryValue: string) => {
  return await FetchYoutube(
    `search?q=${categoryValue === "All" ? "Programming" : categoryValue}&part=snippet,id&regionCode=US&maxResults=50&order=date`
  );
};
