ARG APP_NAME=server
ARG PNPM_VERSION=7.19.0

FROM node:16-alpine3.16 as setup
ARG APP_NAME
ARG PNPM_VERSION
RUN yarn global add pnpm@${PNPM_VERSION}
WORKDIR /app
COPY apps/${APP_NAME} apps/${APP_NAME}
COPY tools tools
COPY package.json \
     pnpm-lock.yaml \
     pnpm-workspace.yaml \
     tsconfig.base.json ./

FROM setup as build
ARG APP_NAME
RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM build as prod-build
ARG APP_NAME
RUN pnpm --filter=${APP_NAME} deploy --prod --frozen-lockfile pruned

FROM node:16-alpine3.16 AS prune
ARG APP_NAME
WORKDIR /app
COPY --from=prod-build app/pruned/build ./
COPY --from=prod-build app/pruned/node_modules node_modules

FROM node:16-alpine3.16 as final
WORKDIR /app
COPY --from=prune app/ ./

CMD [ "node", "server.js" ]
EXPOSE 5000