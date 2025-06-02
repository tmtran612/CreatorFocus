# CreatorFocus

A powerful platform for content creators to streamline their workflow, organize content, and generate fresh ideas with AI.

## Features

- Smart Task Management
- Content Calendar
- AI-Powered Content Ideas
- Analytics Dashboard
- Cross-Platform Integration
- Collaboration Tools

## Tech Stack

- React Native / Expo
- TypeScript
- PostgreSQL
- OpenAI
- Express.js
- Styled Components

## Prerequisites

- Node.js (v18 or later)
- PostgreSQL (v14 or later)
- OpenAI API Key

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=creatorfocus

# OpenAI
OPENAI_API_KEY=your_openai_api_key
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/creatorfocus.git
cd creatorfocus
```

2. Install dependencies:
```bash
npm install
```

3. Initialize the database:
```bash
npm run db:init
```

## Running the Application

1. Start the backend development server:
```bash
npm run backend:dev
```

2. Start the Expo development server:
```bash
npm start
```

3. Run on your preferred platform:
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## Development

- The frontend code is in the `app` directory
- The backend code is in the `backend` directory
- Database migrations are in `backend/scripts`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
