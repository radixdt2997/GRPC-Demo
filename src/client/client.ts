import * as grpc from "@grpc/grpc-js";
import { GreeterClient } from "../../generated/grpc/greeter_grpc_pb";
import { logger } from "../common/logger";

const client = new GreeterClient(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

const request = new proto.greeter.HelloRequest();
request.setName("Shrey");

client.sayHello(request, (error, response) => {
  if (error) {
    logger.error(`Error: ${error.message}`);
    return;
  }
  logger.info(`Greeting: ${response.getMessage()}`);
});
