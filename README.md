<p align="center">
    <h1 align="center">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://github.com/semaphore-protocol/website/blob/main/static/img/semaphore-icon-dark.svg">
            <source media="(prefers-color-scheme: light)" srcset="https://github.com/semaphore-protocol/website/blob/main/static/img/semaphore-icon.svg">
            <img width="40" alt="Semaphore icon." src="https://github.com/semaphore-protocol/website/blob/main/static/img/semaphore-icon.svg">
        </picture>
        Semaphore subgraph
    </h1>
</p>

<p align="center">
    <a href="https://github.com/semaphore-protocol" target="_blank">
        <img src="https://img.shields.io/badge/project-Semaphore-blue.svg?style=flat-square">
    </a>
    <a href="https://github.com/semaphore-protocol/subgraph/blob/main/LICENSE">
        <img alt="Github license" src="https://img.shields.io/github/license/semaphore-protocol/subgraph.svg?style=flat-square">
    </a>
    <a href="https://eslint.org/" target="_blank">
        <img alt="Linter eslint" src="https://img.shields.io/badge/linter-eslint-8080f2?style=flat-square&logo=eslint">
    </a>
    <a href="https://prettier.io/" target="_blank">
        <img alt="Code style prettier" src="https://img.shields.io/badge/code%20style-prettier-f8bc45?style=flat-square&logo=prettier">
    </a>
    <img alt="Repository top language" src="https://img.shields.io/github/languages/top/semaphore-protocol/subgraph?style=flat-square">
    <a href="https://www.gitpoap.io/gh/semaphore-protocol/subgraph" target="_blank">
        <img src="https://public-api.gitpoap.io/v1/repo/semaphore-protocol/subgraph/badge">
    </a>
</p>

<div align="center">
    <h4>
        <a href="./CONTRIBUTING.md">
            👥 Contributing
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="./CODE_OF_CONDUCT.md">
            🤝 Code of conduct
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://github.com/semaphore-protocol/subgraph/issues/new/choose">
            🔎 Issues
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://discord.gg/6mSdGHnstH">
            🗣️ Chat &amp; Support
        </a>
    </h4>
</div>

| The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Our subgraphs allow you to get data from the [`Semaphore.sol`](https://github.com/semaphore-protocol/semaphore/blob/main/contracts/Semaphore.sol) smart contract. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Networks

| Semaphore version | Goerli                                                                                                            | Arbitrum One                                                                                                          |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| v2.0              | N/A                                                                                                               | [semaphore-protocol/arbitrum](https://thegraph.com/hosted-service/subgraph/semaphore-protocol/arbitrum)               |
| v2.5              | [semaphore-protocol/goerli](https://thegraph.com/hosted-service/subgraph/semaphore-protocol/goerli)               | N/A                                                                                                                   |
| v2.6              | [semaphore-protocol/goerli-5259d3](https://thegraph.com/hosted-service/subgraph/semaphore-protocol/goerli-5259d3) | [semaphore-protocol/arbitrum-86337c](https://thegraph.com/hosted-service/subgraph/semaphore-protocol/arbitrum-86337c) |
| v3-beta           | [semaphore-protocol/goerli-89490c](https://thegraph.com/hosted-service/subgraph/semaphore-protocol/goerli-89490c) | N/A                                                                                                                   |

## 🛠 Install

Clone this repository:

```bash
git clone https://github.com/semaphore-protocol/subgraph.git
```

and install the dependencies:

```bash
cd subgraph && yarn
```

## Usage

The subgraph definition consists of a few files:

-   `subgraph.template.yaml`: a YAML file containing the subgraph manifest,
-   `schema.graphql`: a GraphQL schema that defines what data is stored for the subgraph, and how to query it via GraphQL,
-   `src/mappings.ts`: AssemblyScript code that translates from the event data to the entities defined in the schema.

### Code quality and formatting

Run [ESLint](https://eslint.org/) to analyze the code and catch bugs:

```bash
yarn lint
```

Run [Prettier](https://prettier.io/) to check formatting rules:

```bash
yarn prettier
```

or to automatically format the code:

```bash
yarn prettier:write
```

### Code generation

Generate AssemblyScript types for the subgraph (required every time the schema changes):

```bash
yarn codegen
```

### Authorization

Set the authorisation code that links your account on thegraph.com:

```bash
yarn auth <access-token>
```

### Deploy

Deploy the subgraph to the [hosted service](https://thegraph.com/docs/hostedservice/deploy-subgraph-hosted):

```bash
yarn deploy:goerli semaphore-protocol/goerli-5259d3
// or
yarn deploy:arbitrum semaphore-protocol/arbitrum-86337c
```
