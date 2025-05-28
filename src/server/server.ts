import * as grpc from "@grpc/grpc-js";
import "../../generated/grpc/greeter_pb";
import { sayHello } from "./handlers";
import { GreeterService } from "../../generated/grpc/greeter_grpc_pb";

function main() {
  const server = new grpc.Server();

  server.addService(GreeterService, { sayHello });

  server.bindAsync(
    "127.0.0.1:50051",
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.error("Server failed to start:", error);
        return;
      }
      console.log(`Server running at http://127.0.0.1:${port}`);
      server.start();
    }
  );
}

main();
