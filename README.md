# JWT Blacklist
Single JWT token with black list.
- Password encryption
- Revoke JWT using the blacklist mechanism.

## Project Setup
1. Install dependencies
```bash
bash scripts/setup.sh
```

## Development
1. Start dev server
```bash
bash scripts/dev.sh
```

2. Setup database
after starting dev server, run the following commands in a new terminal
```bash
cd server
npx prisma generate # Generate Prisma Client
npx prisma db push # Create Database
npx ts-node prisma/seed.ts # Seed Database
```
