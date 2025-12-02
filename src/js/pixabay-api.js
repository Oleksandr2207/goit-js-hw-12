import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "53401349-bf79c90e9252dafda11b7b71c"; 


export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 15, 
    page: page,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}