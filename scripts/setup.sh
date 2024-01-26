# setup server
cd server
mv .env.dev .env
pnpm install
npx prisma generate # generate prisma client
