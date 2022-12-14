<h1 align="center">
  <br>
  <a href="https://user-images.githubusercontent.com/93975817/196152329-958567e1-7a5d-4fb4-b5d3-e65e88146b3a.png">
  <img src="https://user-images.githubusercontent.com/93975817/196152329-958567e1-7a5d-4fb4-b5d3-e65e88146b3a.png" alt="merkoub.ma" width="200">
  </a>
  <br>
  Merkob.ma
  <br>
</h1>

<h4 align="center">This is a node.js online bus reservation application powered by Express that provides the main functions you'd expect, an admin system, etc. <a href="https://expressjs.com/fr/" target="_blank">Express</a>.</h4>

<p align="center">
  <a href="https://github.com/marouaneXan/online_bus_reservation/blob/main/Api/package.json">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Merkoub.ma">
  </a>
</p>

<p align="center">
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a> •
  <a href="#resources">Resources</a> •
  <a href="#resources">Api</a> 
</p>

![Class_Diagram](https://user-images.githubusercontent.com/93975817/196899186-b0cfad35-8365-4e32-acd0-345117e0d3f4.png)

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

- Run the client side:

```bash
# Clone this repository
$ git clone https://github.com/marouaneXan/online_bus_reservation.git

# Go into the folder client
$ cd online_bus_reservation/Client

# Install dependencies
$ npm install

# Run the client side
$ npm run dev
```

- Run the backoffice side:

```bash

# Go into the folder admin
$ cd online_bus_reservation/Admin

# Install dependencies
$ npm install

# Run the client side
$ npm run dev
```

- Run the backend of the application:

```bash

# Go into the folder Api
$ cd online_bus_reservation/Api

# Install dependencies
$ npm install

# Run the client side
$ npm run server
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://nodejs.org/en/download/package-manager/) or use `node` from the command prompt.

## Credits

This application uses the following open source packages:

- [Express](http://express.com/)
- [Node.js](https://nodejs.org/)

## License

MIT

## Resources

1- Link for jira tasks: https://jsonfile.atlassian.net/jira/software/projects/TR/boards/2

2- Link for conception uml (Class diagram): https://lucid.app/lucidchart/35108162-5e59-4a7d-9114-5fe2fe3011b8/edit?viewport_loc=-317%2C-9917%2C2985%2C1309%2C0_0&invitationId=inv_b9fea858-c5f4-4294-a095-2fb1f5d9f066#

---

## Api

1- Auth
- http://localhost:5000/api/v1/clientAuth/register
- http://localhost:5000/api/v1/clientAuth/login
- http://localhost:5000/api/v1/adminAuth/register
- http://localhost:5000/api/v1/adminAuth/login

  2- Trip
- http://localhost:5000/api/v1/trips ====> method: GET, @desc: get all trips
- http://localhost:5000/api/v1/trips/:bus_id/:company_id ====> method:POST, @desc: create trip
- http://localhost:5000/api/v1/trips/:trip_id ====> method:DELETE, @desc: delete trip
- http://localhost:5000/api/v1/trips/:trip_id ====> method:PUT, @desc: update trip

  3- Bus
- http://localhost:5000/api/v1/cars ====> method: GET, @desc: get all buses
- http://localhost:5000/api/v1/cars ====> method: POST, @desc: create bus
- http://localhost:5000/api/v1/cars/:car_id ====> method: PUT, @desc: update bus
- http://localhost:5000/api/v1/cars/:car_id ====> method: DELETE, @desc: delete bus

  4- Company
- http://localhost:5000/api/v1/company ====> method: GET, @desc: get all companies
- http://localhost:5000/api/v1/company ====> method: POST, @desc: create company
- http://localhost:5000/api/v1/company/:company_id ====> method: PUT, @desc: update company
- http://localhost:5000/api/v1/company/:company_id ====> method: DELETE, @desc: delete company

  5- Client
- http://localhost:5000/api/v1/clients ====> method: GET, @desc: get all clients

  3- Reservation
- http://localhost:5000/api/v1/reservations ====> method: GET, @desc: get all reservations
- http://localhost:5000/api/v1/reservations/:client_id ====> method: GET, @desc: get all    reservations for one client
- http://localhost:5000/api/v1/reservations/:trip_id/:client_id ====> method: POST, @desc: make reservation
- http://localhost:5000/api/v1/reservations/:reservation_id/:trip_id/:client_id ====> method: DELETE, @desc: cancel reservation
- http://localhost:5000/api/v1/reservations/statistics ====> method: GET, @desc: get all statistics

> GitHub [@marouaneXan](https://github.com/marouaneXan) &nbsp;&middot;&nbsp;
> Instagram [@itsmemarouane](https://www.instagram.com/itsmemarouane)
