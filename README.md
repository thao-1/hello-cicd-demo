# Hello CI/CD Demo 🚀

A simple Node.js web application demonstrating automated CI/CD pipeline using GitHub Actions.

## 📋 Project Overview
This project was created as part of a competitive analysis between GitHub Actions and Azure DevOps for automated software delivery. It demonstrates how modern CI/CD tools can automatically test, build, and deploy applications whenever code changes are made.

## 🛠️ What This Demo Shows
- **Continuous Integration**: Automated testing on every code push
- **Continuous Deployment**: Automated build and deployment simulation
- **GitHub Actions Workflow**: Real-world CI/CD pipeline configuration
- **Developer Experience**: How easy it is to set up automation with GitHub Actions

## 🏗️ Project Structure
```
hello-cicd-demo/
├── index.js              # Simple Express web server
├── package.json          # Node.js dependencies and scripts
├── test.js              # Basic test suite
├── .github/
│   └── workflows/
│       └── ci.yml       # GitHub Actions workflow configuration
└── README.md            # This file
```

## 🚀 Features

### Web Application
- Express.js server serving a simple "Hello CI/CD!" page
- Health check endpoint at `/health`
- Automatic startup on port 3000

### CI/CD Pipeline
- Automated testing on every push to main branch
- Dependency installation using npm
- Build verification to ensure app starts correctly
- Deployment simulation (ready for real deployment setup)

## 📊 How It Works
1. Developer pushes code to the main branch
2. GitHub Actions detects the change automatically
3. Workflow triggers and runs the following steps:
   - Checkout the latest code
   - Set up Node.js environment
   - Install project dependencies
   - Run automated tests
   - Build the application
   - Simulate deployment process

## 🔧 Local Development

### Prerequisites
- Node.js (version 18 or higher)
- npm package manager

### Setup Instructions
1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open http://localhost:3000 in your browser

## 🧪 Running Tests
```bash
npm test
```

## 🤝 Contributing
Feel free to submit issues and enhancement requests.

## 📄 License
This project is licensed under the MIT License.



Install dependencies

 npm install


Run tests

 npm test


Start the application

 npm start


Visit the application Open your browser to http://localhost:3000


⚙️ GitHub Actions Workflow
The .github/workflows/ci.yml file defines our automation pipeline:
Triggers: Runs on push to main branch or pull request
Environment: Ubuntu latest with Node.js 18
Steps: Checkout → Setup → Install → Test → Build → Deploy


