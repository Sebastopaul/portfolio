FROM gradle:9.1-jdk-25-and-25
WORKDIR /workspace

COPY . .

RUN gradle clean build -x test --no-daemon

EXPOSE 8080

CMD ["gradle", "bootRun"]
