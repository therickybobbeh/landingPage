FROM node:18-alpine

# Install dependencies for canvas
RUN apk add --no-cache build-base g++ cairo-dev jpeg-dev pango-dev giflib-dev

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Install canvas separately
RUN npm install --no-save canvas

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_API_URL=http://backend:8000

# Copy the rest of the application
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]