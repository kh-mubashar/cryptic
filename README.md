# Cryptic - Cryptocurrency Analytics Platform

## Overview

Cryptic is a modern cryptocurrency analytics platform built with Next.js that provides real-time market data, portfolio tracking, and detailed coin analysis. The application offers a secure, feature-rich environment for cryptocurrency enthusiasts to monitor and analyze digital assets.

🌐 [Live Demo](https://cryptic-chi.vercel.app/)

## Features

- 📊 Real-time cryptocurrency market data
- 💼 Personal portfolio tracking
- 📈 Interactive price charts
- 🔔 Custom price alerts
- 🔒 Secure authentication with Auth0
- 📱 Responsive design for all devices
- ⚡ Server-side rendering for optimal performance

## Technology Stack

### Frontend

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Charts**: Recharts
- **Authentication**: Auth0

### Backend & APIs

- **API Integration**:
  - BitQuery GraphQL API for blockchain data
  - Contentful CMS for content management
- **Data Fetching**: SWR, Apollo Client
- **API Routes**: Next.js API routes with Edge Runtime

### Development Tools

- **Testing**: Jest, React Testing Library
- **Documentation**: Storybook
- **Code Quality**: ESLint, Prettier
- **Version Control**: Git
- **CI/CD**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kh-mubashar/cryptic.git
cd cryptic
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:

```bash
# Auth0
AUTH0_SECRET='your_auth0_secret'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='your_auth0_domain'
AUTH0_CLIENT_ID='your_auth0_client_id'
AUTH0_CLIENT_SECRET='your_auth0_client_secret'

# Bitquery
NEXT_PUBLIC_BITQUERY_URL='https://graphql.bitquery.io'
NEXT_PUBLIC_BITQUERY_KEY='your_bitquery_key'

# Contentful
CONTENTFUL_SPACE_ID='your_space_id'
CONTENTFUL_ACCESS_TOKEN='your_access_token'
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js 14 app directory
├── components/         # Reusable components
├── context/           # React context providers
├── hooks/             # Custom React hooks
├── lib/              # Utility functions and configurations
├── services/         # API service layer
├── store/            # Zustand store configurations
└── utils/            # Helper functions
```

## Testing

- Run unit tests:

```bash
npm run test
```

- Run accessibility tests:

```bash
npm run test:a11y
```

## Storybook

View component documentation and examples:

```bash
npm run storybook
```

## Deployment

The application is deployed on Vercel. The production environment requires setting up environment variables in the Vercel dashboard.

### Environment Variables Required for Production:

- All Auth0 configuration
- BitQuery API credentials
- Contentful access tokens

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Auth0 for authentication
- BitQuery for blockchain data
- Contentful for CMS
- Vercel for hosting

---

Built with ❤️ by [kh-mubashar](https://github.com/kh-mubashar)
