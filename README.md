# Spotify Profile

Spotify Profile is a web application that allows users to visualize their personalized Spotify data. It is built with Angular, Spring Boot, and the Spotify Web API. The application provides insights into user's playlists, tracks, and audio features.

![image.png](https://res.cloudinary.com/dcyl5hb7c/image/upload/v1713131720/ewussv41i1pddshb892i.png)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Author](#author)

## Installation
This project uses both Java and Node.js. Go check them out if you don't have them locally installed.

1. Clone the repository:
```bash
git clone https://github.com/wissemgrari/spotify-profile.git
```
2. Install the dependencies:
```bash
cd spotify-profile
npm install
mvn install
```
3. Create a Spotify Developer account and create a new application to get your client ID and client secret.
4. Rename `.env.example` file in the `client` directory to `.env` and fill-it with your client ID and client secret
5. Add `http://localhost:4200/login` as a redirect URI in your Spotify application settings.

## Usage
To start the server, run the following command:
```bash
mvn spring-boot:run
```
To start the client, navigate to the client directory and run:
```bash
ng serve
```
Then open your browser and visit `http://localhost:4200`.

## License
This project is licensed under the terms of the MIT license.

## Author
[@wissemgrari](https://www.github.com/wissemgrari)