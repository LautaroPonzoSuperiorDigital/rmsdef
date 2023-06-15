import axios from "axios";
import config from "./config";

const fetchListings = (listingData = null) => {
  if (listingData) {
    return axios
      .post(config.backendUrl + "/create-listing", {
        listing: listingData,
      })
      .then((response) => {
        const createdListing = response.data;

        return createdListing;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  } else {
    return axios
      .get(config.backendUrl + "/show-listings")
      .then((response) => {
        const listings = response.data;

        return listings;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }
};

export default fetchListings;
