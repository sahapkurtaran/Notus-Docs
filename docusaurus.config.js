// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Notus Network Docs",
  tagline: "Notus Network Docs",
  url: "http://docs.notus.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "notus-network",
  projectName: "notus-docs",
  trailingSlash: false,
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Notus-Network/Notus-Docs/tree/main/",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Notus Network Docs",
        logo: {
          alt: "Site Logo",
          src: "img/brand/Notus_icon_gradient_bg.svg",
        },
        items: [
          {
            type: "doc",
            docId: "Overview/intro",
            position: "left",
            label: "Overview",
          },
          {
            type: "doc",
            docId: "Node/intro",
            position: "left",
            label: "Node",
          },
          {
            type: "doc",
            docId: "Developer/intro",
            position: "left",
            label: "Developer",
          },
          {
            type: "doc",
            docId: "Api/Fees",
            position: "left",
            label: "API",
          },
          {
            type: "doc",
            docId: "Advanced/Oracle",
            position: "left",
            label: "Advanced",
          },
          {
            type: "doc",
            docId: "Migration/index",
            position: "left",
            label: "Migration",
          },
          {
            type: "doc",
            docId: "FAQ/index",
            position: "left",
            label: "FAQ",
          },
          {
            href: "https://github.com/Notus-Network",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      /* algolia: {
        appId: 'LRR0WHMG8Y',
        apiKey: '80436f7efbeccb8701d266197aaafad8',
        indexName: '/',
      },*/
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Notus-Network",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Notus Network`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
