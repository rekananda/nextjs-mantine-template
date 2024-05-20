interface ConfigType {
  env: any;
  BASE_URL?: string;
  API_URL?: string;
}

const CONFIG:ConfigType = {
  API_URL: process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_API_URL_PROD : process.env.NEXT_PUBLIC_API_URL_DEV,
  env: process.env.NEXT_PUBLIC_ENV || process.env.NODE_ENV,
  BASE_URL: process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_API_URL_PROD : process.env.NEXT_PUBLIC_API_URL_DEV,
};

export default CONFIG;
