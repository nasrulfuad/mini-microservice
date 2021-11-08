<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]](linkedin-url)
[![Github][github-shield]](github-url)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Mini Microservice</h3>

  <p align="center">
    An awesome microservice app using <a href="https://nestjs.com">NestJS</a>
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="center">
  <img src="https://raw.githubusercontent.com/nasrulfuad/mini-microservice/master/architecture.png" />
</p>

There are many resource to learn about microservice but in this project I'm trying to make a simple microservice with NestJS, so I hope you can understand how the microservice work, especially in NestJS

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This project is built under these awesome libraries

- [NestJS](https://nestjs.com/)
- [Nats](https://nats.io/)
- [Docker](https://docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This section is how you setup the app on your own project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Install all dependencies in every services.

- SMTP mail credentials
- Docker and Docker Compose

### Installation

1. Install all dependencies inside every service folders

   ```sh
    npm install
   ```

2. Get a free credentials account for mail service at [https://mailtrap.io](https://mailtrap.io)

3. Copy the credentials and put it in `/mail/.env` file

   ```sh
    # Mailer
    MAIL_HOST=smtp.mailtrap.io
    MAIL_PORT=2525
    MAIL_USERNAME=
    MAIL_PASSWORD=
    MAIL_FROM_ADDRESS="<noreply@awesome-app.com>"
    MAIL_FROM_NAME=${APP_NAME}
   ```

4. Start all service with docker compose
   ```sh
   docker-compose up
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

To access the api, open

- GET [get all users]
  - http://localhost:8080/api/accounts
- POST [create user]
  - http://localhost:8080/api/accounts

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Nasrul - [@nasrulfuad88](https://instagram.com/nasrulfuad88) - nasrulfuad@pm.me

Project Link: [https://github.com/nasrulfuad/mini-microservice](https://github.com/nasrulfuad/mini-microservice)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Choose an Open Source License](https://choosealicense.com)
- [Img Shields](https://shields.io)
- [Readme Template](https://github.com/othneildrew/Best-README-Template)
- [NestJS](https://nestjs.com)
- [Docker](https://docker.com)
- [Nats](https://nats.io)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/nasrul-fuad-0325b314a
[github-url]: https://www.github.com/nasrulfuad
[github-shield]: https://img.shields.io/badge/-Github-black.svg?style=for-the-badge&logo=github&colorB=555
