# 📦 React Native & Web Bun Monorepo

Welcome to your modern cross-platform **Bun monorepo** containing a React Web application, an Expo React Native mobile application, and a shared TypeScript package. Everything is fully integrated using Bun Workspaces for fast dependency resolution and zero-overhead code sharing.

---

## 🏛️ Project Directory Structure

```
.
├── apps/
│   ├── web/                          # React + Vite + TS (Web Application)
│   │   ├── vite.config.ts            # Vite config with shared code paths
│   │   └── src/App.tsx               # Renders modern web dashboard
│   └── mobile/                       # Expo + React Native + TS (Mobile Application)
│       ├── metro.config.js           # Metro bundler configured for workspaces
│       ├── babel.config.js           # babel-plugin-module-resolver custom setup
│       └── App.tsx                   # Renders native mobile screens
├── packages/
│   └── shared/                       # Shared TypeScript Package Core
│       ├── src/index.ts              # Entry exports for configs and helpers
│       └── src/hooks/useCounter.ts   # Logical React hook shared by Web & Mobile
├── package.json                      # Monorepo root workspace settings & commands
├── tsconfig.json                     # Shared TypeScript base paths & configurations
└── .gitignore                        # Global Git ignore rules
```

---

## 🚀 Quick Start

Ensure you have **[Bun](https://bun.sh/)** installed on your machine.

### 1. Initialize the Workspace
Run the following command at the root directory to install all dependencies and link the workspaces:
```bash
bun install
```

### 2. Run the Web App (Vite)
Start the web development server (running on [http://localhost:3000](http://localhost:3000)):
```bash
bun run web:dev
```
To compile a production build of the web app:
```bash
bun run build:web
```

### 3. Run the Mobile App (Expo)
Start the Expo Metro development server (running on [http://localhost:8081](http://localhost:8081)):
```bash
bun run mobile:start
```
Once the server initializes, you can control the bundler directly from the CLI:
* Press **`a`** to open in an Android Emulator.
* Press **`i`** to open in an iOS Simulator.
* Scan the displayed QR Code with the **Expo Go** application on your physical iOS or Android phone to test live!

---

## ⚙️ Monorepo Mechanics & Optimization Details

We have applied several crucial modern configuration rules to ensure smooth code sharing between platforms:

### 1. Zero-Overhead Shared Code (`packages/shared`)
The entrypoints in `packages/shared/package.json` map directly to TypeScript source files:
```json
"main": "src/index.ts",
"types": "src/index.ts"
```
This enables **instant hot-reloading** in both Vite and Metro whenever you edit code in the shared package. You never need to run separate compilation scripts during local development.

### 2. Explicit Metro Workspace Watchers (`apps/mobile/metro.config.js`)
Expo's Metro bundler has been tailored for monorepos to:
* Watch the entire workspace root directory (`watchFolders`).
* Direct module resolution to lookup dependencies at the workspace root `node_modules` (`nodeModulesPaths`).
* Prevent subdirectory conflicts (`disableHierarchicalLookup`).

### 3. Babel Unified Module Resolution (`apps/mobile/babel.config.js`)
To prevent "duplicate React instances" or hooks runtime errors (`Invalid Hook Call`), we use `babel-plugin-module-resolver` inside the mobile project to force dependencies (`react`, `react-native`, etc.) to resolve to the exact local copies inside `apps/mobile/node_modules` at compile time.

---

## 🔒 Private Distribution (Optional)
If your Web and Mobile teams grow and eventually diverge into separate repositories, you can easily distribute the `packages/shared` core via **private GitHub Packages**. Check out the detailed step-by-step guide in [walkthrough.md](file:////home/phenom/.gemini/antigravity-ide/brain/826fb76b-a668-498f-94a1-41f11382bda7/walkthrough.md) inside your IDE folder.
