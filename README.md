# Musix Match Up

Musix Match Up is a modern web application that helps users discover recently founded music bands in their area. The application uses geolocation to detect the user's city and displays bands that were formed in that location within the last 10 years.

## Features

- **Location-based Band Discovery**: Automatically detects your location or allows manual city search
- **Recent Bands Focus**: Shows bands formed within the last 10 years
- **Detailed Band Information**: Displays band name, founding date, location, and music genres
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`
3. Start the development server:
   \`\`\`
   npm start
   \`\`\`

## Technology Stack

- **React.js**: building the user interface
- **Tailwind CSS**: Utility-first CSS framework for styling
- **MusicBrainz API**: Source for comprehensive band data
- **GeoJS**: IP-based geolocation service

## API Usage

The application uses two main APIs:

1. **MusicBrainz API**: For retrieving band information
   - Endpoint: `https://musicbrainz.org/ws/2/artist`
   - Used to search for bands by location and formation date

2. **GeoJS API**: For IP-based geolocation
   - Endpoint: `https://get.geojs.io/v1/ip/geo.json`
   - Used as a fallback when browser geolocation is unavailable

## License

MIT
