<a id="readme-top"></a>

[![Contributors](https://img.shields.io/badge/contributors-3-green)](https://github.com/CodecoolGlobal/gotta-fetch-em-all-react-whowful/graphs/contributors)
[![Forks](https://img.shields.io/badge/forks-0-blue)](https://github.com/CodecoolGlobal/gotta-fetch-em-all-react-whowful/forks)
[![Stargazers](https://img.shields.io/badge/stargazers-0-blue)](https://github.com/CodecoolGlobal/gotta-fetch-em-all-react-whowful/stargazers)
[![Issues](https://img.shields.io/badge/issues-0-blue)](https://github.com/CodecoolGlobal/gotta-fetch-em-all-react-whowful/issues)

# Gotta fetch() 'Em All: Interactive Pokémon Site

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#team-members">Team Members</a></li>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

![pokemon_startpage](https://github.com/user-attachments/assets/57dc9181-91fe-40a1-9522-d6bcb3d5415c)

"Gotta fetch() 'Em All" is an interactive web application that allows users to explore various Pokémon locations, encounter wild Pokémon, and engage in battles. The project is built using JavaScript and React, with data provided by the PokéApi.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
* [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/guide/)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Team Members

* [![Konkoly Gergő](https://img.shields.io/badge/Konkoly%20Gergő-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/whowful)
* [![Nagymengyi Réka](https://img.shields.io/badge/Nagymengyi%20Réka-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nagymengyireka)
* [![Mészáros Ádám](https://img.shields.io/badge/Mészáros%20Ádám-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/adesz0112)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure that you have the following tools and dependencies installed on your system:

**Node.js and npm**
   - **Required**: To run and manage the frontend (React with Vite).
   - **Installation**:
     - **Windows/macOS/Linux**: Download from the official [website](https://nodejs.org/).
     - Installing Node.js will also install `npm`.

   ```sh
   node -v
   npm -v
   ```

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/CodecoolGlobal/gotta-fetch-em-all-react-whowful.git
   ```
2. Navigate to the project directory:
   ```sh
   cd gotta-fetch-em-all
   ```
3. Install NPM packages:
   ```sh
   npm install
   ```
4. Run the project:
   ```sh
   npm run dev
   ```
5. Open the link in your web browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

This application allows users to:

1. **Explore Locations**: The first 20 locations fetched from the PokéApi are displayed. Users can pick from a dropdown menu to start an encounter.
![pokemon_location_picker](https://github.com/user-attachments/assets/9e4a0439-44dc-49e6-b482-dd93e96f6b65)

2. **Choose your Pokémon**: Five Pokémon are randomly displayed for the user to choose from before every encounter.
![pokemon_picker](https://github.com/user-attachments/assets/1fcf2a76-1c42-45e1-a606-2bf70f39768e)

3. **Pokémon Encounters**: A random Pokémon encounter begins when both a location and a starter Pokémon have been picked. The encountered Pokémon's name, sprite, health, attack, and damage points are displayed.
![pokemon_battle](https://github.com/user-attachments/assets/bcdfdd41-e5b2-43b0-84cb-a6ee2a2792a9)

4. **Pokémon Battles**: The battle system includes turn-based attacks until one Pokémon's HP reaches zero, with damage based on the Pokémon's stats fetched from the API.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Hard code the starter Pokémon.
- [ ] Implement a feature to catch encountered Pokémon when defeated.
- [ ] Add previously caught Pokémon to starter Pokémon options.
- [ ] Implement register and login features so user progress can be saved.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

* [PokéApi](https://pokeapi.co/) for the Pokémon data and locations.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
