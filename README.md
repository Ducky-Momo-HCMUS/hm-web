
# Home Management - Web

## Setup

### Prerequisite

- [Node.js](https://nodejs.org)
- [pnpm](https://pnpm.io)
- [Git](https://git-scm.com)
- [Docker](https://www.docker.com) (Optional)

### Installation

Make sure to install all required dependencies in [Prerequisite](#prerequisite).

1. Install all NodeJS dependencies using `pnpm install`
2. Copy keys from each *.env.template* to your *.env* and config it with your own value. Note that each application must have its own *.env*.

    ```
    .
    └── apps/
        ├── academic-staff/
        │   └── .env
        ├── admin/
        │   └── .env
        ├── frontend/
        │   └── .env
        └── server/
            └── .env
    ```
3. Start BFF server by going to *apps/server* and `pnpm watch`
4. To start any FE, go to its directory (e.g: *apps/frontend*) and `pnpm watch`

### Docker

For BFF deployment, you should Dockerize the application using `docker compose build`

## Project structure

```
.
├── .circleci
│   └── config.yml     # CI/CD config for apps/server
└── apps
    ├── academic-staff # FE for academic staff
    ├── admin          # FE for admin
    ├── frontend       # FE for teacher
    └── server         # BFF, an API gateway to connect to backend services
```
