# A Full-Stack NextJs Authentication application

This is a [Next.js](https://nextjs.org/) and  [MongoDB](https://www.mongodb.com/atlas/database) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)


## Description

A fullstack NextJs authentication application with MongoDB for the database service. It helped me to get started with NextJs.

## Concepts covered:
- [x] NextJs Routing
- [x] Rest API
- [x] Cookies
- [x] NextJs Middleware
- [x] Protecting Routes


## Getting Started

Before starting the server setup your own environment variables within the `.env.local` file in the root of your project with the help of `.env.sample` file provided in the source code


### Install Packages

**Note**: I am using the `npm (node package manager)` in order to download and manage all the dependencies

Inside your project's root terminal runt the following command to install all the required dependencies
```bash
npm instal 
# or 
npm i
```

### Setting up `.env.local`

- Register setup your [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account by following the necessary [Steps](https://www.mongodb.com/docs/atlas/getting-started/)

- Assign your MongoDB Atlas cluster connection link to the `MONGODB_URI` env variable inside your `.env.local` file.

- Assign a `JWT_SECRET` inside your `.env.local` file. This will be used to verify and sign your **JSON Web Tokens**

- Assign a `COOKIE_NAME` inside your `.env.local` file. This will be used as a key when you will set your own cookies.

- Assign a `DOMAIN` within your `.env.local` file. This will be used after deploying the project on [vercel](https://vercel.com/)

### Running the Development Server

After installing the packages and setting up your `.env.local` environment file, now its time run the development server:



```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
