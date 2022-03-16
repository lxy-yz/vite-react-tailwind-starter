/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

import admin from "firebase-admin";
import { plugin as cypressFirebasePlugin } from "cypress-firebase";
import dotenv from "dotenv";

dotenv.config();

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
export default function (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  config.env.VITE_API_KEY = process.env.VITE_API_KEY;
  config.env.VITE_AUTH_DOMAIN = process.env.VITE_AUTH_DOMAIN;
  config.env.VITE_PROJECT_ID = process.env.VITE_PROJECT_ID;
  config.env.VITE_STORAGE_BUCKET = process.env.VITE_STORAGE_BUCKET;
  config.env.VITE_MESSAGING_SENDER_ID = process.env.VITE_MESSAGING_SENDER_ID;
  config.env.VITE_APP_ID = process.env.VITE_APP_ID;
  config.env.VITE_MEASUREMENT_ID = process.env.VITE_MEASUREMENT_ID;

  const extendedConfig = cypressFirebasePlugin(on, config, admin);
  return extendedConfig;
}
