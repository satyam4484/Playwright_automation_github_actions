import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

const env = process.env.ENV || 'dev';

// Load the appropriate .env file
dotenv.config({
  path: `.env.${env}`,
});

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
});