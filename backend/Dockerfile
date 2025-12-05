# ========================================
# Stage: Runtime-only image for prebuilt JAR
# ========================================
FROM eclipse-temurin:17-jre-jammy AS runtime

# Set working directory
WORKDIR /app

# Copy the already-built JAR from your CI pipeline artifact
COPY target/*.jar app.jar

# Create a non-root user and group for security
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

# Create a secure temp directory for Java
RUN mkdir -p /app/tmp && chmod 700 /app/tmp
ENV JAVA_TMPDIR=/app/tmp

# Switch to the non-root user
USER appuser

# Expose the application port
EXPOSE 8080

# Add labels (metadata)
LABEL org.opencontainers.image.title="Java Maven Backend" \
      org.opencontainers.image.description="Secure production runtime image for Java/Maven app" \
      org.opencontainers.image.authors="Marimuthukumaran S" \
      org.opencontainers.image.licenses="MIT"

# Optional: Healthcheck for Docker/Kubernetes monitoring
# Adjust endpoint if your app uses a different path
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
  CMD curl -f http://localhost:8080/actuator/health || exit 1

# Start the application
ENTRYPOINT ["java", "-jar", "app.jar"]

