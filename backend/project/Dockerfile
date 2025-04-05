# Use official Node.js image as base
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose port 8080
EXPOSE 8080

# Start the application
CMD ["node", "src/index.js"]
