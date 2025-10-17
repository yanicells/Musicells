# Musicells

A web application that provides users with an intuitive interface to explore and discover music albums using the Spotify API. Users can view new releases, search for albums, see detailed information about each album, and favorite albums.

## Tech Stack

- **Frontend**: React 19, TailwindCSS, Vite
- **API**: Spotify Web API

## Setup Guide

### Prerequisites

- Node.js (>= 18.x)
- npm (>= 9.x)

### Clone the Repository

```bash
git clone https://github.com/yanicells/Musicells.git
cd Musicells
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add your Spotify API credentials:

```env
VITE_CLIENT_ID=your_spotify_client_id_here
VITE_CLIENT_SECRET=your_spotify_client_secret_here
```

### Run the Project

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Usage

1. Open the landing page at `/`
2. Browse through new releases
3. Search for specific albums using the search bar
4. View detailed album information, including track listings
5. Favorite albums for easy access later
