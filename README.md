# Musica

## Introduction

Musica is a simple React app that allows users to play music. It leverages the Rapid Spotify API to access a wide range of songs and provide an enjoyable listening experience.

# Features

1. Search: (To be implemented) Users will be able to search for their favorite songs, artists, albums, or playlists.
2. Playback: (To be implemented) The app will provide playback controls, allowing users to play, pause, skip, and adjust the volume of the selected track.

# Prerequisites

Before getting started with Musica, ensure that you have the following prerequisites set up on your system:

1. Node.js: Musica requires Node.js to run the development server and install dependencies.
2. Rapid Api Spotify Account: To access the Rapid Spotify API, you need to create an account.

# Installation

Follow these steps to set up Musica on your local machine:

1. Clone the Musica repository from GitHub or download the source code as a ZIP file.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the required dependencies by running the following command:

```
pnpm i or pnpm install
```

4.Create a .env file in the project root directory and add your Rapid Spotify API credentials


```
VITE_API_KEY = 'X-RapidAPI-Key' https://rapidapi.com/airaudoeduardo/api/spotify81/
 
```

5. Start the development server with the following command:

```
pnpm run dev
```

# API Integration

Musica utilizes the Spotify API through RapidAPI to retrieve music data. To integrate the API, follow these steps:

Subscribe to the Test plan of the Spotify API on RapidAPI. You can find the API on the RapidAPI marketplace using the following links:

1. <a href="https://rapidapi.com/Glavier/api/spotify23/">Spotify23 API</a>

2. <a href="https://rapidapi.com/airaudoeduardo/api/spotify81/">Spotify81 API</a>

Once you have subscribed to the Test plan, you will receive the necessary API keys.

In your Musica project, open the _.env_ and replace the API keys.

Save the changes and restart the Musica development server (pnpm run dev) to apply the API integration.

# Usage

Upon opening Musica, you will be presented with a clean and intuitive user interface. Although the search and playback features are not yet implemented, here's a brief overview of how they will work:

1. Search for Music: Users will be able to use the search bar at the top of the screen to find songs, artists, or playlists. Musica will display matching results as you type.
2. Play a Track: Users will be able to click on a song from the search results to start playing it. The playback controls will appear at the bottom of the screen, allowing users to control the music.

# Libraries Used

- **React Query**
- **React-Router-DOM**
- **Styled-Components**
- **Redux-Toolkit**
- **Normalize-CSS**

# Code Storage

The source code for Musica is stored in a GitHub repository, which can be accessed at <a href="https://github.com/antomuangigitau/Musica">**Github**</a> Feel free to explore the repository for more details on the code structure and implementation.
