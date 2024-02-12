# Next.js User Profile Application

This project is a simple Next.js application that demonstrates the use of Static Site Generation (SSG) and dynamic routing to display user profiles fetched from a public API.

## Features

- **Static Site Generation**: The landing page is pre-rendered at build time using Next.js SSG for optimal performance and SEO.
- **Dynamic User Profiles**: Utilizes dynamic routes (`/users/[id]`) to generate static pages for user profiles based on data fetched from `https://jsonplaceholder.typicode.com/users`.
- **Responsive Design**: Ensures a seamless experience across different device sizes.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the latest version of [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/r9aminu/next-app1.git
    cd your-next-app
    ```

2. Install the project dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

Now, the application should be running on [http://localhost:3000](http://localhost:3000). Visit [http://localhost:3000/users/1](http://localhost:3000/users/1) to view a user profile page.

