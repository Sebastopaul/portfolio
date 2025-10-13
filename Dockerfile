FROM node:22-alpine AS build-frontend
WORKDIR /frontend
COPY ../frontend/app/package*.json ./
RUN npm ci
COPY ../frontend/app .
RUN npm run build -- --output-path=dist --configuration=production

FROM gradle:9.1-jdk-25-and-25-alpine AS build-backend
WORKDIR /workspace
COPY . .
COPY --from=build-frontend /frontend/dist/ ./src/main/resources/static/
RUN gradle clean build -x test --no-daemon

FROM eclipse-temurin:25-jdk-alpine AS runtime
WORKDIR /app
COPY --from=build-backend /workspace/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
