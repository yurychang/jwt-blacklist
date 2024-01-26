# Server

## NPM scripts
- `pnpm dev`:  Start the development server.
- `pnpm build`: Build the production version
- `pnpm start`: Start the production server.

## Project Setup

```bash
pnpm install
```

### Prisma
#### Generate Prisma Client
```bash
npx prisma generate # Generate Prisma Client
npx prisma db push # Create Database
npx ts-node prisma/seed.ts # Seed Database
```
