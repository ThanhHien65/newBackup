FROM node:16-alpine AS backend
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Copy app files
COPY . ./
# Cache and Install dependencies
RUN rm -rf node_modules
RUN npm install 
RUN npm install -g npm@8.16.0
RUN npm install nodemon -g
# Copy app files
# Expose port
EXPOSE 5000
# Start the app
CMD ["nodemon", "server.js"]