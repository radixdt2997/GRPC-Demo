import { IGreeterServer } from "generated/types/greeter_grpc_pb";
import { HelloReply } from "generated/types/greeter_pb";

export const sayHello: IGreeterServer["sayHello"] = (call, callback) => {
  const reply = new HelloReply();
  reply.setMessage(`Hello, ${call.request.getName()}`);
  callback(null, reply);
};
