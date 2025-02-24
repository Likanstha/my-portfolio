# Step 1: Use an official Node.js image as the base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (or yarn.lock) to the container
COPY package.json package-lock.json* ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your project files into the container
COPY . .

# Step 6: Build the Next.js project
RUN npm run build

# Step 7: Expose the port Next.js will run on
EXPOSE 3000

# Step 8: Define the command to run Next.js
CMD ["npm", "start"]
