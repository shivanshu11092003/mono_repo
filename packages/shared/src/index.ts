export * from './hooks/useCounter';

export const SHARED_APP_CONFIG = {
  appName: "Antigravity Monorepo",
  apiVersion: "1.0.0",
  themeColor: "#6366f1", // Sleek modern indigo
};

export function getGreeting(name: string): string {
  return `Hello ${name}! Welcome to the Antigravity Bun Monorepo.`;
}
