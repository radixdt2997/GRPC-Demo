import { IGreeterServer } from "../../generated/types/greeter_grpc_pb";

export const sayHello: IGreeterServer["sayHello"] = (call, callback) => {
  const reply = new proto.greeter.HelloReply();
  reply.setMessage(`Hello, ${call.request.getName()}`);
  callback(null, reply);
};
