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
        {
          type: "category",
          label: "REST",
          collapsible: true,
          collapsed: true,
          items: [
            "Api/REST/intro",
            {
              type: "category",
              label: "Node",
              collapsible: true,
              collapsed: true,
              items: [
                "Api/REST/Node/online",
                "Api/REST/Node/node",
                "Api/REST/Node/master",
                "Api/REST/Node/main",
                "Api/REST/Node/replicant",
              ],
            },
            {
              type: "category",
              label: "Metrics",
              collapsible: true,
              collapsed: true,
              items: [
                "Api/REST/Metrics/node",
                "Api/REST/Metrics/master",
                "Api/REST/Metrics/main",
                "Api/REST/Metrics/replicant",
                "Api/REST/Metrics/block",
              ],
            },
            {
              type: "category",
              label: "Blockchain",
              collapsible: true,
              collapsed: true,
              items: [
                "Api/REST/Blockchain/summary",
                "Api/REST/Blockchain/last",
                "Api/REST/Blockchain/hash",
                "Api/REST/Blockchain/status",
                "Api/REST/Blockchain/currencylist",
                "Api/REST/Blockchain/infogenesis",
                "Api/REST/Blockchain/infotransfer",
                "Api/REST/Blockchain/inforeserve",
              ],
            },
            {
              type: "category",
              label: "Wallet",
              collapsible: true,
              collapsed: true,
              items: ["Api/REST/Wallet/balance"],
            },
            {
              type: "category",
              label: "Transaction",
              collapsible: true,
              collapsed: true,
              items: [
                "Api/REST/Transaction/send",
                "Api/REST/Transaction/transactionstatus",
                "Api/REST/Transaction/airdrop",
              ],
            },
            {
              type: "category",
              label: "NFT",
              collapsible: true,
              collapsed: true,
              items: [
                "Api/REST/NFT/new",
                "Api/REST/NFT/update",
                "Api/REST/NFT/status",
              ],
            },
          ],
        },
        "Api/RPC",
        "Api/WebSocket",
        "Api/NVM",
        "Api/Fees",
        "Api/SmartContract",
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
