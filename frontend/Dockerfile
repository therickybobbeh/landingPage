FROM node:18-alpine AS builder

# Install dependencies for canvas
RUN apk add --no-cache build-base g++ cairo-dev jpeg-dev pango-dev giflib-dev

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Install canvas separately
RUN npm install --no-save canvas

# Copy the rest of the application
COPY . .

# Build the Next.js app
RUN npm run build

# Production image
FROM node:18-alpine AS runner

WORKDIR /app

# Install only production dependencies
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production
RUN npm install --no-save canvas

# Copy built application
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]