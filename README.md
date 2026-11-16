<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
-->

[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href=https://github.com/wyncode/C38_bill_splitting">
    <img src="https://res.cloudinary.com/jeanniet89/image/upload/v1598822858/Cuenta%20App/Cuenta_shield_yis559.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Cuenta APP</h3>

  <p align="center">
    An awesome BillSplitting APP!
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

# Cuenta Final Project

[Cuenta](https://cuenta-final-app.herokuapp.com/)

In the World we live in, `TIME` is of the essence. With that being said, we realized that there was a huge need for an APP to help make splitting a bill as easy as saying `SHOTS PLEASE.`

## Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [Bootstrap](https://getbootstrap.com)
- [JQuery](https://jquery.com)
- [React](https://react.com)

<!-- GETTING STARTED -->

## Getting Started

To run the application locally, install the server and client dependencies,
configure the environment, then start both processes.

## Prerequisites

- Node.js 16 or newer and npm
- A MongoDB database for account and bill data
- Stripe test keys for checkout; SendGrid credentials for email features

Twilio credentials are only needed for sending SMS when a user adds a phone number.

## Installation

1. Install dependencies from the repository root:
   ```sh
   npm install
   npm install --prefix client
   ```
2. Create local environment files:
   ```sh
   cp .env.example .env
   cp client/.env.example client/.env
   ```
3. Edit both files. Set `MONGODB_URL` to a running local MongoDB or MongoDB
   Atlas database, set `JWT_SECRET` to a private random value (for example,
   `openssl rand -hex 32`), and replace the Stripe and SendGrid placeholders
   with your test/development credentials. Set `REACT_APP_STRIPE_PUBLIC_KEY`
   to the matching Stripe publishable test key. Twilio values are only needed
   for SMS. Never commit either `.env` file.
4. Start the server and client:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000). The Express API runs
   at [http://localhost:8080](http://localhost:8080).

## Dependencies

| Client Side             | Server Side             |
| ----------------------- | ----------------------- |
| @stripe/react-stripe-js | @sendgrid/mail          |
| bootstrap               | bcryptjs                |
| react                   | cloudinary              |
| react-bootstrap         | concurrently            |
| react-dom               | cookie-parser           |
| react-qr-reader         | express                 |
| react-router            | jsonwebtoken            |
| axios                   | mongodb                 |
|                         | cors                    |
|                         | moment                  |
|                         | mongoose                |
|                         | validator               |
|                         | passport                |
|                         | passport-jwt            |
|                         | @stripe/react-stripe-js |
|                         | @stripe/stripe-js       |
|                         | bootstrap               |
|                         | npm                     |
|                         | passport                |
|                         | react-bootstrap         |
|                         | react-icons             |
|                         | react-qr-reader         |
|                         | react-stripe-checkout   |
|                         | react-toastify          |
|                         | sendgrid                |
|                         | stripe                  |
|                         | sweetalert              |
|                         | toast                   |
|                         | twilio                  |
|                         | validator               |

## Available commands

- `npm run dev`: Runs the Express server and React development app together.
- `npm run server`: Runs JUST the Express server.
- `npm run client`: Runs JUST the React development app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.

## To deploy

NOTE: Heroku specifically runs `npm start`, so don't remove that from your package.json file.

- `heroku create your-app-name`
- `heroku config:set MONGODB_URL=<insertYourAtlasDbUri>`
- `git push heroku master`

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create.
Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

Jeannie Torres - jeanniet89@gmail.com

Project Link: [https://github.com/wyncode/C38_bill_splitting](https://github.com/wyncode/C38_bill_splitting)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [Stripe](https://stripe.com/)
- [Sendgrid/mail](https://sendgrid.com/)
- [Cloudinary](https://cloudinary.com/)
- [Twilio](https://www.twilio.com/messaging)
- [Toast](https://www.toast.com/kr)
- [React-toastify](https://www.npmjs.com/package/react-toastify)
- [Stripe/stripe](https://www.npmjs.com/package/react-stripe-elements)
- [Bcryptjs](https://coderrocketfuel.com/article/using-bcrypt-to-hash-and-check-passwords-in-node-js)
- [Cookie-parser](https://riptutorial.com/node-js/example/6012/using-a-template-engine)
- [Jsonwebtoken](https://jwt.io/introduction/)
- [Moment](https://momentjs.com/)
- [Mongodb](https://www.mongodb.com/)
- [Mongoose](https://medium.com/swlh/connecting-a-node-application-to-mongodb-using-mongoose-devdocs-3c924431efce)
- [Passport](https://www.mokuji.me/article/passport-hashing-remember)
- [Validator](https://yarnpkg.com/package/validator)

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/wyncode/C38_bill_splitting.svg?style=flat-square
[contributors-url]: https://github.com/wyncode/C38_bill_splitting/graphs/contributors
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jeannie-torres-6628bb96/
[issues-shield]: https://img.shields.io/github/issues/wyncode/C38_bill_splitting.svg?style=flat-square
[issues-url]: https://github.com/wyncode/C38_bill_splitting/issues
