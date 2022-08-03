export interface AppConfig {
  readonly environment: string;
  readonly port: number;
}

export interface TokenConfig {
  readonly jwtSecret: string;
  readonly cookieSecret: string;
  readonly accessTokenMaxAge: number;
  readonly refreshTokenMaxAge: number;
}

export interface ThrottleConfig {
  readonly ttl: number;
  readonly limit: number;
}

export type ConfigKey = 'app' | 'token' | 'ThrottleConfig';

export interface Config {
  app: AppConfig;
}
