# Movie RESTFull API 

Movie RESTFull API is built using ExpressJs, Sequelize and Mysql as the database.
Here there are several features such as storing data logs using Winston and Graylog, Authentication each api url using JWT, Validation Request fields, using Redis as Token storage media and using Jest & Supertest for Unit Test media.


# How to install

**Step 1 :**
```bash
Open CLI (Command Line Interface), after that

Clone Repo : git clone https://github.com/rizkyefrian2706/Restfull-API-Movie.git

then go into the folder :
cd Restfull-API-Movie
```

**Step 2 :**
install mySQL and [Redis](https://redis.io/docs/getting-started/installation/install-redis-on-windows/)
in my case use [Xampp](https://www.apachefriends.org/download.html)
```bash
running mySql

Open Redis Server and Running
```

**Step 3 :**
```bash
Open CLI (Command Line Interface) project, install Package Node Modules Project

in project install node js : 
npm install

setup and running grayLog to docker: 
docker-compose up -d

create database by sequelize
npx sequelize-cli db:create
npx sequelize-cli db:migrate

the installation process and database configuration is complete.
```

# Unit Test

```bash
in project running Unit Testing with Jest & Supertest

npm run test
```

# Running Project test by Postman

```bash
in project running apps

npm run serve

Endpoint API: 
http://localhost:3001

Endpoint GrayLog
http://localhost:9000

For access Login to GrayLog
Username : admin
Password : admin

to be able to hit the api movie url make sure the api get token has been hit
curl getToken:
curl --location 'http://localhost:3001/getToken' \
--header 'Authorization: 0e4f1786-daed-3ead-ad6c-3bdc37d39256'

after getting the token, use the token in the Authorization header of each api.
sample curl get all data:
curl --location 'http://localhost:3001/movies' \
--header 'Authorization: Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemF0aW9uIjoiMGU0ZjE3ODYtZGFlZC0zZWFkLWFkNmMtM2JkYzM3ZDM5MjU2IiwiaWF0IjoxNjg5ODk4NDE1LCJleHAiOjE2ODk5MDIwMTV9.RElTPdl2_tAPX0pCneAOgPUp03O_88Fz2hVoSyIbKPqu6iwJoKIQhD_oL1aeuiZezfOTWRruSj4pflnjntDHyg'
```

# Environment Project

**JavaScript runtime:**

JavaScript runtime with Node JS [Node JS](https://nodejs.org/en/) version 18.14.2

**Framework Backend:**

This project was generated with [Express JS](https://expressjs.com/en/starter/installing.html) version 4.18.2.

**Database:**

This project was generated with MySql Database use with [Xampp](https://www.apachefriends.org/download.htmll). 

This project was generated with Cache use with [Redis](https://github.com/MSOpenTech/redis/releases/download/win-3.2.100/Redis-x64-3.2.100.zip). 

**Logging:**

This project was generated with use with [GrayLog](https://www.graylog.org/). 

**Infra:**

This project was generated with docker compose use with run [Docker Desktop Windows](https://www.docker.com/products/docker-desktop/). 


Addon Plugin

Framework Express [Framework Express](https://expressjs.com/en/starter/installing.html).

```bash
mkdir myapp
cd myapp

npm init
npm install express
```

Build an Authentication API with JWT Token [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken).

```bash
npm install jsonwebtoken
```

(CORS) Cross Origin Resource Sharing [CORS](https://expressjs.com/en/resources/middleware/cors.html).

```bash
npm install cors
```

Cache Redis [Redis](https://www.npmjs.com/package/ioredis).

```bash
npm install ioredis
```

mysql2 [mysql2](https://www.npmjs.com/package/ioredis).

```bash
npm install mysql2
```

sequelize [sequelize](https://sequelize.org/).

```bash
npm install sequelize
```

winston [winston](https://github.com/winstonjs/winston).

```bash
npm install winston
```
