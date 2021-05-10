import axios from "axios";
import CONSTANTS from "./api.endpoints.constants.js";

class dataLayer {
  constructor() {
    this.axiosBussiness = axios.create({
      baseURL: CONSTANTS.BASE_URL_BUSSINESS,
    });
    this.axiosBussiness.defaults.headers.post["Content-Type"] =      "application/json"; // for POST
    this.axiosBussiness.defaults.headers.patch["Content-Type"] =      "application/json";
    this.axiosBussiness.defaults.headers.patch["Access-Control-Allow-Origin"] =      "*";
    this.axiosBussiness.interceptors.request.use(function (config) {
      console.log("called interceptors............");
      const token = window.localStorage.getItem("AccessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    this.axiosAuth = axios.create({
      baseURL: CONSTANTS.BASE_URL_AUTH,
    });
    this.axiosAuth.defaults.headers.post["Content-Type"] = "application/json"; // for POST
    this.axiosAuth.defaults.headers.patch["Content-Type"] = "application/json";
    this.axiosAuth.defaults.headers.patch["Access-Control-Allow-Origin"] = "*";
    this.axiosAuth.interceptors.request.use(function (config) {
      console.log("called interceptors............");
      const token = window.localStorage.getItem("AccessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  getFaceBookToken(token, bussiness) {
    const data = { token, bussiness };
    return this.axiosBussiness.post(CONSTANTS.FACEBOOK_PROCESS_DATA, data);
  }

  getBussienessReviewData(bussiness) {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .post(CONSTANTS.ZOMATO_GET_BUSSINESS_END_POINT, bussiness)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  updateBussiness(objectVal) {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .patch(CONSTANTS.MAIN_BUSSINESS_END_POINTS, objectVal)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
          reject(error.response.status);
        });
    });
  }

  getReview(objectVal) {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .post(CONSTANTS.MAIN_REVIEW_END_POINTS, objectVal)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
          reject(error.response.status);
        });
    });
  }
  login(credentials) {
    return new Promise((resolve, reject) => {
      this.axiosAuth
        .post(CONSTANTS.LOGIN, credentials)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          // if (error.response) {
          // }
          reject(error.response.status);
        });
    });
  }

  addBussiness(bussiness) {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .post(CONSTANTS.MAIN_BUSSINESS_END_POINTS, bussiness)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          // if (error.response) {
          // }
          reject(error.response.status);
        });
    });
  }

  getBussiness() {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .get(CONSTANTS.MAIN_BUSSINESS_END_POINTS)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  getCategory() {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .get(CONSTANTS.MAIN_CATEGORY_END_POINTS)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getyelpData(data) {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .post(CONSTANTS.YELP_GET_BUSSINESS_END_POINT,data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getzomatoData(data) {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .post(CONSTANTS.ZOMATO_GET_BUSSINESS_END_POINT,data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  gethotelData(data) {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .post(CONSTANTS.HOTEL_GET_BUSSINESS_END_POINT,data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getgoogleMapData(data) {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .post(CONSTANTS.GOOGLEMAP_GET_BUSSINESS_END_POINT,data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getAmazonMapData(data) {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .post(CONSTANTS.AMAZON_GET_BUSSINESS_END_POINT,data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  createAgreegation(data) {
    return new Promise((resolve, reject) => {
      this.axiosBussiness
        .post(CONSTANTS.MAIN_AGREEGATE_END_POINTS,data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  verify(credentials) {
    return new Promise((resolve, reject) => {
      axios
        .post(CONSTANTS.AUTH_VERIFY, credentials)
        .then((response) => {
          resolve(response.data);
        })
        .catch((response) => {
          reject(response);
        });
    });
  }
}

export default new dataLayer();
