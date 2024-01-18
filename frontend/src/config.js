let REACT_APP_API_BASE_URL = "https://library-api-cuhj.onrender.com";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  REACT_APP_API_BASE_URL = "https://library-api-cuhj.onrender.com";
}

export { REACT_APP_API_BASE_URL };
