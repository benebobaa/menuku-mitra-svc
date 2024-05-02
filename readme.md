# TypeScript Express with Prisma and PostgreSQL

This is a template project for setting up a TypeScript Express server with Prisma ORM and PostgreSQL database.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/benebobaa/menuku-mitra-svc.git

2. Install dependencies:

    ```sh
    cd menuku-mitra-svc

    
    npm install

## Configuration
    Environment Variables

Create a .env file in the root directory of your project. Add the following environment-specific variables:

```DATABASE_URL=postgresql://user:password@localhost:5432/database_name```

Replace user, password, and database_name with your PostgreSQL credentials.

## Prisma Configuration

Ensure you have Prisma installed globally:

```npx prisma migrate dev```

```npx prisma generate```

## Build Typescript

```npm run build```

## Run

```npm run start```

```
    Selamat anda berhasil
````