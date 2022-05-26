import axios from "../axios";

async function shortenUrl(url: string) {
  let res = await axios.post("/", { url: url });
  return res.data.url;
}

export default shortenUrl;
