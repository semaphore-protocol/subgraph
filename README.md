> [!IMPORTANT]  
> The Semaphore subgraph was moved to the main monorepo: [subgraph](https://github.com/semaphore-protocol/semaphore/tree/main/apps/subgraph) (inside the `apps` folder).

<h1 align="center">
    Semaphore Subgraph
</h1>

<p align="center">
    <a href="https://github.com/semaphore-protocol" target="_blank">
        <img src="https://img.shields.io/badge/project-Semaphore-blue.svg?style=flat-square">
    </a>
    <a href="https://github.com/semaphore-protocol/subgraph/blob/main/LICENSE">
        <img alt="Github license" src="https://img.shields.io/github/license/semaphore-protocol/subgraph.svg?style=flat-square">
    </a>
    <a href="https://github.com/semaphore-protocol/subgraph/actions/workflows/test.yml">
        <img alt="GitHub Workflow test" src="https://img.shields.io/github/actions/workflow/status/semaphore-protocol/subgraph/test.yml?branch=main&label=test&style=flat-square&logo=github">
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
        <a href="https://semaphore.pse.dev/discord">
            🗣️ Chat &amp; Support
        </a>
    </h4>
</div>

| The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Our subgraphs allow you to get data from the [`Semaphore.sol`](https://github.com/semaphore-protocol/semaphore/blob/main/contracts/Semaphore.sol) smart contract. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Networks

| Semaphore version | Sepolia                                                                                   | Goerli                                                                                                            | Mumbai                                                                                  | Optimism Goerli                                                                                           | Arbitrum Goerli                                                                                           | Arbitrum One                                                                                                          |
| ----------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| v2.0              | N/A                                                                                       | N/A                                                                                                               | N/A                                                                                     | N/A                                                                                                       | N/A                                                                                                       | [semaphore-protocol/arbitrum](https://thegraph.com/hosted-service/subgraph/semaphore-protocol/arbitrum)               |
| v2.5              | N/A                                                                                       | [semaphore-protocol/goerli](https://thegraph.com/hosted-service/subgraph/semaphore-protocol/goerli)               | N/A                                                                                     | N/A                                                                                                       | N/A                                                                                                       | N/A                                                                                                                   |
| v2.6              | N/A                                                                                       | [semaphore-protocol/goerli-5259d3](https://thegraph.com/hosted-service/subgraph/semaphore-protocol/goerli-5259d3) | N/A                                                                                     | N/A                                                                                                       | N/A                                                                                                       | [semaphore-protocol/arbitrum-86337c](https://thegraph.com/hosted-service/subgraph/semaphore-protocol/arbitrum-86337c) |
| v3.0 - v3.1       | N/A                                                                                       | [semaphore-protocol/goerli-89490c](https://thegraph.com/hosted-service/subgraph/semaphore-protocol/goerli-89490c) | N/A                                                                                     | N/A                                                                                                       | N/A                                                                                                       | [semaphore-protocol/arbitrum-72dca3](https://thegraph.com/hosted-service/subgraph/semaphore-protocol/arbitrum-72dca3) |
| >= v3.2           | [semaphore-sepolia](https://api.studio.thegraph.com/query/14377/semaphore-sepolia/v3.6.1) | [semaphore-goerli](https://api.studio.thegraph.com/query/14377/semaphore-goerli/v3.6.1)                           | [semaphore-mumbai](https://api.studio.thegraph.com/query/14377/semaphore-mumbai/v3.6.1) | [semaphore-optimism-goerli](https://api.studio.thegraph.com/query/14377/semaphore-optimism-goerli/v3.6.1) | [semaphore-arbitrum-goerli](https://api.studio.thegraph.com/query/14377/semaphore-arbitrum-goerli/v3.6.1) | [semaphore-arbitrum](https://api.studio.thegraph.com/query/14377/semaphore-arbitrum/v3.6.1)                           |

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
-   `src/semaphore.ts`: AssemblyScript code that translates from the event data to the entities defined in the schema.

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
yarn codegen <network>
```

It also generates a `subgraph.yaml` file for your specific network.

### Testing

After generating the types and `subgraph.yaml` file, test your subgraph:

```bash
yarn test
```

### Deployment

#### TheGraph Studio

Set the authorization code that links your account on thegraph.com:

```bash
yarn auth <access-token>
```

Deploy the subgraph to the [TheGraph Studio](https://thegraph.com/studio/):

```bash
yarn deploy <subgraph-name>
```

#### Local

Start services required for TheGraph node by running:

```bash
docker compose -f docker-compose-graph.yml up
```

Start a local Hardhat node and deploy the [Semaphore contract](https://github.com/semaphore-protocol/semaphore/tree/main/packages/contracts):

```bash
# CWD = /semaphore/packages/contracts
yarn start
yarn deploy:semaphore --network localhost
```

Create the `subgraph.yaml` file for your local network and create/deploy your subgraph:

```bash
yarn codegen localhost
yarn create-local
yarn deploy-local
```

Once the subgraph is published it will start indexing. You can query the subgraph using the following GraphQL endpoint:

```
http://127.0.0.1:8000/subgraphs/name/sempahore/graphql
```
