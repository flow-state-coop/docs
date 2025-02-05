// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkEmbed from "./src/remark/embed";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Flow State Docs",
  tagline: "Making Impact Common",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.flowstate.network",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "flow-state-coop", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
          remarkPlugins: [remarkEmbed],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-card.png",
      navbar: {
        title: "Flow State",
        logo: {
          alt: "Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "platformSidebar",
            position: "left",
            label: "Platform",
          },
          {
            type: "docSidebar",
            sidebarId: "developersSidebar",
            position: "left",
            label: "Developers",
          },
          {
            type: "docSidebar",
            sidebarId: "cooperativeSidebar",
            position: "left",
            label: "Cooperative",
          },
          {
            href: "https://github.com/flow-state-coop",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "X",
                href: "https://x.com/flowstatecoop",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/flow-state-coop",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Flow State Coop. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  clientModules: ["./src/twitterWidgetModule.js"],
};

export default config;
