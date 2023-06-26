const YOUTUBE_API_KEY = "AIzaSyCadMXG1KDIkKew_g_JvRBYanAiM0ze_tw";

const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export default YOUTUBE_API_URL;
