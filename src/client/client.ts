import * as grpc from "@grpc/grpc-js";
import { GreeterClient } from "generated/types/greeter_grpc_pb";
import { HelloRequest } from "generated/types/greeter_pb";
import { createClient } from "../common/grpc";
import { logger } from "../common/logger";

const client = createClient(
  GreeterClient,
  "localhost:50051",
  grpc.credentials.createInsecure()
);

const request = new HelloRequest();
request.setName("Shrey");

client.sayHello(request, (error: grpc.ServiceError | null, response: any) => {
  if (error) {
    logger.error(`Error: ${error.message}`);
    return;
  }
  logger.info(`Greeting: ${response.getMessage()}`);
});
