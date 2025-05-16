import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

export const loadProto = (protoPath: string) => {
  const packageDefinition = protoLoader.loadSync(protoPath, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });
  return grpc.loadPackageDefinition(packageDefinition);
};

export const createServer = () => new grpc.Server();

export const createClient = (
  service: any,
  address: string,
  credentials: grpc.ChannelCredentials
) => {
  return new service(address, credentials);
};
