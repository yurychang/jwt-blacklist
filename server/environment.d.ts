declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      JWT_SECRET: string;
      DATABASE_URL: string;
      REDIS_URL: string;
    }
  }
}

export {};
