import axios from "axios";
const url = "http://localhost:8000/api/v1/properties";

const propertyInstance = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("real_state-token")}`,
  },
});
export const addProperty = async (property) => {
  let response = propertyInstance.post("/", property, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response;
};
export const uploadPropertyImages = async (propertyId, imgData) => {
  let response = propertyInstance.post("/upload/" + propertyId, imgData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return await response;
};

export const getRecentProperties = async () => {
  let response = propertyInstance.get("/recents", {
    headers: {
      Accept: "application/json",
    },
  });
  return await response;
};
export const getSingleProperty = async (propertyId) => {
  let response = propertyInstance.get("/" + propertyId, {
    headers: {
      Accept: "application/json",
    },
  });
  return await response;
};
