# Movie RESTFull API 

Movie RESTFull API is built using ExpressJs, Sequelize and Mysql as the database.
Here there are several features such as storing data logs using Winston and Graylog, Authentication each api url using JWT, Validation Request fields, using Redis as Token storage media and using Jest & Supertest for Unit Test media.


# How to install

**Step 1 :**
Open CLI (Command Line Interface), after that
Clone Repo : 
```bash
$ git clone https://github.com/rizkyefrian2706/Restfull-API-Movie.git
```
then go into the folder :
```bash
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
Open CLI (Command Line Interface) project, install Package Node Modules Project

in project install node js : 
```bash
$ npm install
```
setup and running grayLog to docker: 
```bash
$ docker-compose up -d
```
create database by sequelize
```bash
$ npx sequelize-cli db:create
$ npx sequelize-cli db:migrate
```
the installation process and database configuration is complete.

# Unit Test

in project running Unit Testing with Jest & Supertest
```bash
$ npm run test
```

# Running Project test by Postman

in project running apps
```bash
npm run serve
```
Endpoint API: 
```bash
http://localhost:3001
```
Endpoint GrayLog
```bash
http://localhost:9000
```
For access Login to GrayLog
```bash
Username : admin
Password : admin
```
to be able to hit the api movie url make sure the api get token has been hit
curl getToken:
```bash
curl --location 'http://localhost:3001/getToken' \
--header 'Authorization: 0e4f1786-daed-3ead-ad6c-3bdc37d39256'
```
![gettoken](https://github.com/rizkyefrian2706/Restfull-API-Movie/assets/74532222/8bf934c4-343d-4365-b415-11d47351e528)

after getting the token, use the token in the Authorization header of each api.
sample curl get all data:
```bash
curl --location 'http://localhost:3001/movies' \
--header 'Authorization: Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemF0aW9uIjoiMGU0ZjE3ODYtZGFlZC0zZWFkLWFkNmMtM2JkYzM3ZDM5MjU2IiwiaWF0IjoxNjg5ODk4NDE1LCJleHAiOjE2ODk5MDIwMTV9.RElTPdl2_tAPX0pCneAOgPUp03O_88Fz2hVoSyIbKPqu6iwJoKIQhD_oL1aeuiZezfOTWRruSj4pflnjntDHyg'
```
![movies](https://github.com/rizkyefrian2706/Restfull-API-Movie/assets/74532222/8b6a5713-0cde-4792-b47f-9f517ecdcb7f)

# Documentation
This project was generated with :
  - [Express JS](https://expressjs.com/en/starter/installing.html) version 4.18.2.
      
  ```bash
  mkdir myapp
  cd myapp
  
  npm init
  npm install express
  ```
  - Database with MySql, in my case using with [Xampp](https://www.apachefriends.org/download.htmll).
  - Packages mysql2 [mysql2](https://www.npmjs.com/package/mysql2).
  ```bash
  npm install mysql2
  ```
  - Cache use with [Redis](https://github.com/MSOpenTech/redis/releases/download/win-3.2.100/Redis-x64-3.2.100.zip). 
  - Packages Redis [Redis](https://www.npmjs.com/package/ioredis).
  ```bash
  npm install ioredis
  ```
  - Logging use with [GrayLog](https://www.graylog.org/). 
  - Docker : docker compose use with run [Docker Desktop Windows](https://www.docker.com/products/docker-desktop/). 
  - Authentication API with JWT Token [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken).
  ```bash
  npm install jsonwebtoken
  ```
  - (CORS) Cross Origin Resource Sharing [CORS](https://expressjs.com/en/resources/middleware/cors.html).
  ```bash
  npm install cors
  ```
  - sequelize [sequelize](https://sequelize.org/).
  ```bash
  npm install sequelize
  ```
  - winston [winston](https://github.com/winstonjs/winston).
  ```bash
  npm install winston
  ```
  - [winston-daily-rotate-file](https://www.npmjs.com/package/winston-daily-rotate-file)
  - [winston-gelf](https://www.npmjs.com/package/winston-gelf)
  - [Jest](https://www.npmjs.com/package/jest)
