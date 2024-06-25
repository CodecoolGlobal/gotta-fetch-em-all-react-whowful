# Gotta fetch() 'Em All: Interactive Pokémon Site

Welcome to "Gotta fetch() 'Em All"! This project was built using JavaScript and React to create an interactive Pokémon website where users can choose their own Pokémon and explore various locations where they can encounter and battle Pokémon provided by the PokéApi.

## Team Members
- [Konkoly Gergő](https://github.com/whowful)
- [Mészáros Ádám](https://github.com/adesz0112)
- [Nagymengyi Réka Lili](https://github.com/nagymengyireka)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Future Features](#future-features)
- [Acknowledgments](#acknowledgments)

## Overview

This project is an interactive web application that allows users to:
1. Explore locations.
2. Encounter wild Pokémon.
3. Engage in Pokémon battles.

## Features

1. **Display Locations**
   - The first 20 locations fetched from the PokéApi can be seen on the site.
   - Users can pick from a dropdown-menu to start an encounter.

2. **Choose your Pokémon**
   - Five Pokémon are randomly displayed for the user to choose from before every encounter.

3. **Pokémon Encounters**
   - When both a location and a starter Pokémon have been picked, a random Pokémon encounter begins.
   - The encountered Pokémon's name, sprite, health, attack, and damage points are displayed.
   - In case the location has no Pokémon, a message is displayed letting the user know to choose a different one next time.

4. **Pokémon Battles**
   - The battle system includes turn-based attacks until one Pokémon's HP reaches zero.
   - The damage is based on the two Pokémon's stats fetched from the API.

## Installation

To run this project locally, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/CodecoolGlobal/gotta-fetch-em-all-react-whowful
   ```
2. Navigate to the project directory:
   ```bash
   cd gotta-fetch-em-all
   ```
3. Install the dependencies:
   ```bash 
   npm install
   ```
4. Run the project:
   ```bash
   npm run dev
   ```
5. Open the link in your web browser.

## Future Features

- Hard code the starter Pokémon.
- Implement a feature to catch encountered Pokémon when defeated.
- Add previously caught Pokémon to starter Pokémon options.
- Implement register and login features so user progress can be saved.

## Acknowledgments

- PokéApi for the Pokémon data.
- Vite for the front-end library.