# 🌌 Lore Forge: Unleash Limitless Narratives for Your Games

![Lore Forge Banner/Screenshot Placeholder](https://via.placeholder.com/1200x400?text=Lore+Forge+App+Screenshot)

**Status:** Under Active Development | Public Demo Available

---

## Table of Contents

* [About Lore Forge](#about-lore-forge)
* [Features](#features)
* [Demo & Live Preview](#demo--live-preview)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Environment Variables](#environment-variables)
* [Usage](#usage)
    * [The Test Forge (Demo)](#the-test-forge-demo)
    * [The Main Forge (Developer Only)](#the-main-forge-developer-only)
* [Roadmap & Future Plans](#roadmap--future-plans)
* [Support the Developer](#support-the-developer)
* [License](#license)
* [Contact](#contact)

---

## About Lore Forge

Lore Forge is an innovative, **AI-powered application** designed specifically for **game developers, writers, and storytellers** looking to accelerate their creative process. Say goodbye to writer's block and endless brainstorming sessions!

With Lore Forge, you can quickly generate rich, detailed, and compelling lore for various aspects of your game world – from heroic characters and clandestine factions to sprawling worlds and epic quests. Our intuitive dashboard-style interface and advanced AI act as your co-creator, helping you bring your imaginative concepts to life with unprecedented ease.

This project is currently in active development, constantly evolving with new features and refined AI capabilities. A public demo is available to showcase the app's potential!

---

## Features

* **AI-Powered Lore Generation (Main Forge):** Craft detailed narratives for:
    * **Characters:** Develop compelling backstories and personalities.
    * **Factions:** Build intricate organizations with their own motives and histories.
    * **Worlds:** Design expansive universes with unique settings and lore.
    * **Quests:** Outline engaging missions and story arcs.
* **Diverse Genre Support:** Generate lore tailored to specific genres:
    * General, Fantasy, Sci-Fi, Cyberpunk, Historical, Horror.
* **Intuitive Dashboard UI:** A clean, two-column layout for seamless lore generation and viewing, designed with a **futuristic, techy, gamer aesthetic**.
* **"Test Forge" Demo:** Explore the app's capabilities with a curated collection of 25+ high-quality pre-generated lore examples. This demo allows users to filter by lore type and genre, and instantly load detailed lore entries to get a feel for the app's output without requiring live API calls or authentication.
* **Content Management:**
    * **Copy to Clipboard:** Instantly copy generated lore for use in your documents or game engines.
    * **Save as .TXT:** Download lore directly as a text file for easy archiving.
    * **Prompt & Response Display:** See your original prompt alongside the AI's output for context and easy review.
* **Responsive Navigation:** A sleek, desktop navigation menu seamlessly transitions into a functional mobile side drawer (hamburger menu) for on-the-go access.
* **Secure Authentication:** Utilizes GitHub OAuth for user login and currently employs restricted access control, allowing only a designated developer to access the main AI generation features.
* **Custom Scrollbars:** Unique, themed scrollbars enhance the desktop aesthetic.

---

## Demo & Live Preview

Experience Lore Forge for yourself!
The main generation features are currently restricted to the developer, but you can explore the app's capabilities and get a feel for its power on the dedicated demo page:

**🚀 [Live Demo - Test Forge](https://lore-generator-zeta.vercel.app/)**


---

## Tech Stack

Lore Forge is built with modern, robust technologies to deliver a fast and engaging experience:

* **Frontend Framework:** [Next.js](https://nextjs.org/) (React Framework for the Web)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS framework)
* **Authentication:** [NextAuth.js](https://next-auth.js.org/) (for GitHub OAuth)
* **Icons:** [Heroicons](https://heroicons.com/) (by Tailwind Labs)
* **AI Backend:** [Google Cloud Vertex AI](https://cloud.google.com/vertex-ai) (`text-bison` model)
    * (Future: Planned custom AI model integration)
* **Deployment:** [Vercel](https://vercel.com/)

---

## Getting Started

To get a local copy of Lore Forge up and running for development, follow these simple steps.

### Prerequisites

* [Node.js](https://nodejs.org/en/download/) (v18.x or later recommended)
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (v8.x or later) or [Yarn](https://yarnpkg.com/getting-started/install) (v1.x or later)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-github-username/lore-forge.git](https://github.com/your-github-username/lore-forge.git)
    cd lore-forge
    ```
    (Replace `your-github-username` and `lore-forge` with your actual GitHub username and repository name)

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

### Environment Variables

Lore Forge requires several environment variables for authentication and API access. Create a `.env.local` file in the root of your project (same level as `package.json`) and populate it as follows:

```dotenv
# .env.local - DO NOT COMMIT THIS FILE TO GIT!

# --- NextAuth.js Configuration (for GitHub OAuth) ---
# Obtain these from your GitHub OAuth App settings (e.g., GitHub Developer Settings -> OAuth Apps)
GITHUB_ID=YOUR_GITHUB_CLIENT_ID
GITHUB_SECRET=YOUR_GITHUB_CLIENT_SECRET
NEXTAUTH_SECRET=YOUR_RANDOM_STRING_FOR_NEXTAUTH_SECRET # Use `openssl rand -base64 32` to generate a strong key

# --- Google Cloud Vertex AI Configuration (for AI API access) ---
# Your Google Cloud Project ID (e.g., inbound-trilogy-460817-t5)
GCP_PROJECT_ID=YOUR_GCP_PROJECT_ID

# Base64 encoded JSON string of your Google Cloud Service Account Key
# 1. Download the JSON key from GCP Console > IAM & Admin > Service Accounts > Your SA > Keys > Add Key > Create new key > JSON
# 2. Encode its ENTIRE content (including newlines) to Base64.
#    - Linux/macOS: `cat /path/to/your/service-account-key.json | base64`
#    - Online tools can also be used, but be cautious with sensitive data.
GCP_SERVICE_ACCOUNT_KEY_BASE64=YOUR_BASE64_ENCODED_SERVICE_ACCOUNT_KEY_JSON

# --- App Access Control (For Developer-Only Access to Main Forge) ---
# The GitHub email address authorized to view the main Forge page.
# This MUST be prefixed with NEXT_PUBLIC_ for client-side access in Navbar.tsx.
# NEXT_PUBLIC_AUTHORIZED_FORGE_EMAIL=your_personal_github_email@example.com
```

### Important Notes:

* Security: Never commit your .env.local file to version control. Add it to your .gitignore. For production deployments (e.g., Vercel), set these variables directly in your hosting provider's environment settings.
* GitHub OAuth App: Ensure your GitHub OAuth App's callback URL is correctly configured (e.g., http://localhost:3000/api/auth/callback/github for local dev, and your Vercel URL for production).

---

## Usage
#### Running Locally
To run the development server:
```dotenv
npm run dev
# or
# yarn dev
```

Open http://localhost:3000 in your browser.

### The Test Forge (Demo)

The Test Forge is designed to give you a full demonstration of Lore Forge's capabilities without needing live API calls.

* **Access:** Navigate to the "Test Forge" link in the navigation menu or visit /test-forge directly.
* **Interaction:** Generate lore tailored to specific genres:
    * General, Fantasy, Sci-Fi, Cyberpunk, Historical, Horror.
    * The prompt input area is disabled, as its purpose is to display the content of pre-generated prompts.
    * Use the "Filter by Lore Type" and "Filter by Genre" dropdowns to narrow down the list of available test prompts below.
    * Click on any of the displayed prompt buttons (e.g., "The Wandering Blade of the Wastes") to immediately load its corresponding generated lore, prompt details, and title into the Lore Result section on the right.
* **Purpose**: This page showcases the quality and variety of lore Lore Forge can produce, serving as a comprehensive demo.
* **"Test Forge" Demo:** Explore the app's capabilities with a curated collection of 25+ high-quality pre-generated lore examples. This demo allows users to filter by lore type and genre, and instantly load detailed lore entries to get a feel for the app's output without requiring live API calls or authentication.
* **Content Management:**
    * **Copy to Clipboard:** Instantly copy generated lore for use in your documents or game engines.
    * **Save as .TXT:** Download lore directly as a text file for easy archiving.
    * **Prompt & Response Display:** See your original prompt alongside the AI's output for context and easy review.
* **Responsive Navigation:** A sleek, desktop navigation menu seamlessly transitions into a functional mobile side drawer (hamburger menu) for on-the-go access.
* **Secure Authentication:** Utilizes GitHub OAuth for user login and currently employs restricted access control, allowing only a designated developer to access the main AI generation features.
* **Custom Scrollbars:** Unique, themed scrollbars enhance the desktop aesthetic.

### The Main Forge (Developer Only)

The core AI generation functionality of the Main Forge (/) is currently restricted.

* **Access"** Only users who log in with the GitHub account email specified in NEXT_PUBLIC_AUTHORIZED_FORGE_EMAIL will be able to access this page.
* **Unauthorized Access:** If an unauthorized user attempts to access the main Forge, they will be redirected to the "Coming Soon" page.
* **Functionality:** This page allows you to interact with the live Google Cloud Vertex AI backend to generate new, unique lore based on your custom prompts.

---

## Roadmap & Future Plans
Lore Forge is an ambitious project with exciting plans for the future:

* **Public Beta/Launch:** Opening the full AI generation capabilities to a wider audience.
* **Custom AI Model Training:** Allow users to upload their own datasets to fine-tune the AI's style and generate truly unique narratives that fit seamlessly into their game universe.
* **Expanded Customization:** More granular controls for tone, narrative voice, and specific lore attributes (e.g., magic systems, technology levels).
* **Collaborative Features:** Implement team accounts and shared workspaces for streamlined lore development among multiple contributors.
* **Advanced Export Options:** Develop integrations for direct export into popular game development tools (e.g., Unity, Unreal Engine) or standardized documentation formats (e.g., JSON, YAML).
* **Interactive Lore Visualizations:** Explore generating interactive lore maps, character relationship diagrams, or timeline visualizations.
* **Monetization/Tiered Access:** Introduce premium features or higher usage quotas for advanced users.

---

## Support the Developer
Lore Forge is a passion project built by Connor Reed, dedicated to empowering game creators and storytellers. If you find this tool valuable, or simply wish to support the development of innovative creative tools for the community, your contributions are immensely appreciated!

Consider supporting the project by checking out this free resource, with an option to contribute:

**✨ [Supporting a Developer with a Free Notion Template](https://6801801549663.gumroad.com/l/nayuj)**


Every contribution, big or small, directly fuels the development of future features and ensures Lore Forge continues to grow and evolve for the community.

---

## License
Distributed under the MIT License. See the `LICENSE` file in the repository for more information.

---

## Contact
#### Connor Reed - Email: me@calexreed.dev - Portfolio: https://calexreed.dev
#### Project Link: https://github.com/RaizenStyx/Lore-Generator