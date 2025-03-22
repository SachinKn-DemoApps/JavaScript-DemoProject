# Use a lightweight Node.js image
FROM node:lts-alpine

# Set working directory so that next commands executes in /home/app directory
WORKDIR /home/app

# Copy only package.json and package-lock.json first
COPY ./app/package*.json ./

# Install dependencies before copying the rest of the code
RUN npm install

# Copy the entire application after dependencies are installed
COPY ./app ./

# Expose the port (optional, but recommended)
EXPOSE 3000

# Start the application (no need for /home/app/server.js because of WORKDIR)
CMD ["node", "server.js"]