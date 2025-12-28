import axios from 'axios'


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
}); 

export const getAllFoods = async () => {
  try {
    const response = await api.get("/list");

    if (response.data.success) {
      return response.data.data; // return only data
    } else {
      throw new Error(response.data.message || "Failed to fetch foods");
    }
  } catch (error) {
    console.error("❌ Food API Error:", error);
    throw error;
  }
};