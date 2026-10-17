This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Waitlist database

Waitlist signups are saved to Firestore in the `waitlist` collection, one document per email.

To run it locally, copy `.env.example` to `.env.local` and fill in the values from a Firebase service account key (**Project settings → Service accounts → Generate new private key**). Or use the emulator:

```bash
npx firebase-tools emulators:start --only firestore --project demo-jobber
FIRESTORE_EMULATOR_HOST=127.0.0.1:8080 FIREBASE_PROJECT_ID=demo-jobber npm run dev
```

## Deploying

Firebase is only used as the database, so the site can be hosted anywhere that runs Next.js. Set these environment variables on the host, using values from a Firebase service account key (**Project settings → Service accounts → Generate new private key**):

- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

To update the Firestore security rules, which block all access from browsers so only the server can read or write signups, run `npx firebase-tools deploy --only firestore:rules`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
