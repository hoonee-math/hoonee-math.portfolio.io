// types/index.ts

export type ServerStatus = 'checking' | 'online' | 'offline';

export interface ServerConfig {
  url: string;
  timeout: number;
}