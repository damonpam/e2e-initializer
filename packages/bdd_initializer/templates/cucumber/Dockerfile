FROM node:lts-alpine
ENV BDD_DIR="/bdd"
WORKDIR $BDD_DIR

COPY package.json yarn.lock $BDD_DIR/
RUN yarn install --prod

ENTRYPOINT ["yarn", "test"]

