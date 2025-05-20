# Fase de construcción
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

# Fase de ejecución
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
#COPY src/main/resources/application.properties application.properties

# Copiar el script wait-for-it.sh desde tu proyecto local
#COPY wait-for-it.sh /app/wait-for-it.sh

# Darle permisos de ejecución
#RUN chmod +x /app/wait-for-it.sh
EXPOSE 8080
# Usar wait-for-it.sh como punto de entrada para esperar a la BBDD antes de arrancar Spring Boot
#ENTRYPOINT ["/app/wait-for-it.sh", "java", "-jar", "app.jar"]
ENTRYPOINT ["java", "-jar", "app.jar"]