# 🚀 gRPC with Node.js & TypeScript

A modern, production-ready boilerplate for building gRPC-based services in **Node.js** using **TypeScript**. This project includes both server and client implementations, clean code structure, and reusable configurations.

---

## 📁 Folder Structure

```text
└── GRPC/
     ├── README.md
     ├── package-lock.json
     ├── package.json
     ├── src/
     │    ├── client/
     │    │    └── client.ts
     │    ├── common/
     │    │    ├── grpc.ts
     │    │    └── logger.ts
     │    ├── proto/
     │    │    └── greeter.proto
     │    └── server/
     │         ├── handlers.ts
     │         └── server.ts
     └── tsconfig.json
```

---

## 🛠️ Scripts Guide

### 🔧 Setup

- **`npm run setup`**
  - Installs dependencies
  - Generates gRPC TypeScript/JS code from `.proto` files
  - Builds the TypeScript project
  - Use this after cloning or cleaning the repo.

---

### 🚀 Starting the App

- **`npm run start:server`**

  - Starts the compiled gRPC server from the `dist/` folder.

- **`npm run start:client`**
  - Starts the compiled gRPC client from the `dist/` folder.

---

### ⚙️ Development Mode

- **`npm run dev:server`**

  - Runs the gRPC server using `nodemon` + `ts-node` for live development.

- **`npm run dev:client`**
  - Runs the gRPC client using `nodemon` + `ts-node` for live development.

---

### 🏗️ Build & Compilation

- **`npm run build`**
  - Compiles the TypeScript code (`.ts`) into JavaScript (`.js`) and places it in the `dist/` folder.
  - Useful for production deployments.

---

### 🧼 Clean Up

- **`npm run cleanup`**
  - Removes:
    - `node_modules`
    - `dist/`
    - `generated/`
    - `package-lock.json`
  - Use when you want to reset the environment or fix issues by starting fresh.

---

### 📁 gRPC Code Generation

- **`npm run create-directories`**

  - Creates required directories (`generated/js`, `generated/types`, `generated/grpc`) for the output of gRPC code generation.

- **`npm run generate-grpc`**

  - Runs the `protoc` compiler with:
    - `grpc_tools_node_protoc` for JS stubs
    - `protoc-gen-ts` for TypeScript type definitions
  - Output is split into:
    - JS: `generated/js/`
    - gRPC JS Services: `generated/grpc/`
    - TypeScript Definitions: `generated/types/`

- **`npm run generate-types`**
  - A combo script:
    - Runs `create-directories`
    - Then runs `generate-grpc`
  - Use this every time you update your `.proto` files.

---

## ✅ Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/radixdt2997/GRPC-Demo.git
   cd GRPC
   ```

2. Setup the Project:

   ```bash
   npm run setup
   ```

3. Start the server and client:
   ```bash
   npm run start:server
   npm run start:client
   ```

## 🧠 Notes

- Proto file location is expected at: `src/proto/greeter.proto`
- All generated files go into the `generated/` folder (not mixed with source files).
- You can add more services by creating new `.proto` files and extending the `generate-grpc` script.
