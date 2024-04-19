# Use Maven image for the build stage
FROM maven:3.8.1-openjdk-17-slim as build

# Set the current working directory inside the image
WORKDIR /api

# Copy pom.xml file to the /api directory
COPY pom.xml .

# Download all required dependencies into one layer
RUN mvn -B dependency:resolve dependency:resolve-plugins

# Copy source code to the /api directory
COPY src ./src

# package the application
RUN mvn package -DskipTests

# Start a new stage for running the application
# Starting a new stage for running the application is a part of the multi-stage build process in Docker. The main advantage of this approach is that it allows you to separate the build stage and the run stage, which can significantly reduce the size of the final Docker image.  In the build stage, you typically install all the necessary build tools and dependencies, and compile your application. This stage often results in a large Docker image because of all the build tools and dependencies.  In the run stage, you start from a new, often smaller base image, and copy only the compiled application (and any runtime dependencies) from the build stage. This results in a smaller final Docker image because it doesn't include the build tools and dependencies that are not needed to run the application.
FROM openjdk:17-slim

# Set the current working directory inside the image
WORKDIR /app

# Copy the jar file from the build stage
COPY --from=build /api/target/*.jar app.jar

# Run the application
CMD ["java", "-jar", "app.jar"]
