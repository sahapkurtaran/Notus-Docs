/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  overview: [
    {
      type: "category",
      label: "Getting Started",
      collapsible: true,
      collapsed: false,
      items: [
        "Overview/intro",
        {
          type: "category",
          label: "Notus Basics",
          collapsible: true,
          collapsed: true,
          items: [
            "Overview/Basics/intro",
            "Overview/Basics/how_it_works",
            {
              type: "category",
              label: "Consensus",
              collapsible: true,
              collapsed: true,
              items: ["Overview/Basics/Consensus/intro"],
            },
            {
              type: "category",
              label: "Concept",
              collapsible: true,
              collapsed: true,
              items: [
                "Overview/Basics/Concept/Transaction",
                {
                  type: "category",
                  label: "Cryptography",
                  collapsible: true,
                  collapsed: true,
                  items: [
                    {
                      type: "category",
                      label: "Encode",
                      collapsible: true,
                      collapsed: true,
                      items: [
                        "Overview/Basics/Concept/Cryptography/Encode/Base",
                      ],
                    },
                    {
                      type: "category",
                      label: "Encryption",
                      collapsible: true,
                      collapsed: true,
                      items: [
                        "Overview/Basics/Concept/Cryptography/Encryption/AES",
                      ],
                    },
                    {
                      type: "category",
                      label: "Hash",
                      collapsible: true,
                      collapsed: true,
                      items: [
                        "Overview/Basics/Concept/Cryptography/Hash/Sasha",
                      ],
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Network",
                  collapsible: true,
                  collapsed: true,
                  items: ["Overview/Basics/Concept/Network/intro"],
                },
              ],
            },
            {
              type: "category",
              label: "Governance",
              collapsible: true,
              collapsed: true,
              items: ["Overview/Basics/Governance/intro"],
            },
            {
              type: "category",
              label: "Virtual Machine",
              collapsible: true,
              collapsed: true,
              items: ["Overview/Basics/VM/intro"],
            },
          ],
        },
      ],
    },
  ],
  developer: [
    {
      type: "category",
      label: "Developer Guides",
      collapsible: true,
      collapsed: false,
      items: [
        "Developer/intro",
        // "Developer/Network/index",
        // "Developer/Network/NotusCore",
        "Developer/smartcontract_writing",
        "Developer/smartcontract_deploying",
      ],
    },
  ],
  api: [
    {
      type: "category",
      label: "APIs",
      collapsible: true,
      collapsed: false,
      items: [
        "Api/Fees",
        "Api/HTTP",
        "Api/RPC",
        "Api/NVM",
        "Api/SmartContract",
        "Api/WebSocket",
      ],
    },
  ],
  advanced: ["Advanced/Oracle"],
  migration: ["Migration/index"],
  node: [
    {
      type: "category",
      label: "Node",
      collapsible: true,
      collapsed: false,
      items: [
        "Node/intro",
        {
          type: "category",
          label: "Development",
          collapsible: true,
          collapsed: false,
          items: [
            "Node/Development/enviroment",
            "Node/Development/connectnetwork",
          ],
        },
      ],
    },
    "Node/notuscli",
    "Node/notusgui",
  ],
};

module.exports = sidebars;
