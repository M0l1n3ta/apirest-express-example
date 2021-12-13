FROM node:16 AS build

WORKDIR /usr/src/app
# Install dependencies
COPY package*.json ./
RUN npm install
COPY . .

# Specify port app runs on EXPOSE 3000
# Run the app CMD [ "npm", "start" ]

EXPOSE 3000
CMD [ "npm", "start" ]
