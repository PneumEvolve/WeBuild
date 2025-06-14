# WeBuild dApp Mockup

This repository contains a simple mockup of the **WeBuild** DAO ecosystem. The goal is to simulate the four token process (SEED, BRANCH, FRUIT, ROOT) without any blockchain integration. Both the frontend and backend are intentionally minimal so future upgrades to Terra Classic via CosmWasm and Terra.js can be performed easily.

## Project Structure

```
backend/    # Node.js Express server with dummy endpoints
frontend/   # React + Vite application
```

## Running Locally

1. Install dependencies for the frontend and backend:

```bash
cd frontend && npm install
cd ../backend && npm install
```

2. Start the backend server:

```bash
node server.js
```

3. Start the frontend dev server in a separate terminal:

```bash
npm run dev --prefix frontend
```

The application will be available at `http://localhost:5173` (default Vite port).

**Note:** This mockup stores everything in memory and has no persistent database or blockchain connections.

