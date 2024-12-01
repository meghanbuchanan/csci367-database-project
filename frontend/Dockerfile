# Use a Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the frontend files to the container's working directory
COPY . /app/

# Install the dependencies for the React app and clear the cache
RUN npm install && npm cache clean --force

# Build the React app for production (optional, if you want to serve it statically)
RUN npm run build

# Expose port 3000 for the React app
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
