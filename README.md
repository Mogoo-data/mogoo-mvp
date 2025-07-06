# Mogoo MVP Website

Mogoo MVP is a Next.js-based platform designed to help users calculate and determine their optimal renewable energy purchasing strategy, tailored to both their immediate needs and long-term company goals. This tool simplifies the decision-making process for businesses looking to transition to more sustainable energy sources by providing a clear and data-driven analysis.


## Features
- **Personalized Energy Calculations** - Helps users calculate their renewable energy needs based on usage and specific company goals.
- **Renewable Energy Options** - Provides a comprehensive view of different renewable energy sources (solar, wind, etc.) and their suitability for the user's needs.
- **Dynamic Recommendations** - Offers dynamic, real-time suggestions for energy purchases based on the input data.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [VisActor](https://visactor.io/) - Visualization library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Shadcn](https://ui.shadcn.com/) - UI components
- [Jotai](https://jotai.org/) - State management
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- API Routes for backend services and calculations

## Quick Start

You can clone this repository and run it locally.

1. Clone this repository

```bash
git clone https://github.com/mengxi-ream/visactor-next-template
```

2. Install dependencies

```bash
pnpm install
```

3. Add .env file in local

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET={NEXTAUTH_SECRET}
GOOGLE_CLIENT_ID={GOOGLE_CLIENT_ID}
GOOGLE_CLIENT_SECRET={GOOGLE_CLIENT_SECRET}
MONGODB_URI={MONGODB_URI}
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. Run the development server

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```bash
src/
├── app/ # App router pages
│ ├── (dashboard)/ # main dashboard page
│ ├── api/  # nextjs backend api route
│ ├── calculator/ 
│ ├── histories/ 
│ ├── login/
│ ├── market/
│ ├── resource/
│ └── sites/ 
├── components/ # React components
│ ├── card-blocks/ # Card components
│ ├── chart-blocks/ # Chart components
│ ├── nav/ # Navigation components
│ └── ui/ # UI components
├── config/ # Configuration files
├── data/ # Sample data
├── hooks/ # Custom hooks
├── lib/ # Utility functions
├── style/ # Global style
└── types/ # TypeScript types
```
