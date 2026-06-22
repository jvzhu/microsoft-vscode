# Microsoft VSCode Clone

A modern Node.js project built with Express.js and comprehensive CI/CD pipeline using GitHub Actions.

## Project Structure

```
.
├── src/
│   └── index.js           # Main application entry point
├── tests/
│   └── index.test.js      # Test suite
├── package.json           # Project dependencies and scripts
├── .eslintrc.cjs          # ESLint configuration
├── .prettierrc             # Prettier configuration
└── .github/workflows/
    └── ci.yml             # GitHub Actions CI/CD workflow
```

## Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

The server will start on `http://localhost:3000`

### Development Mode

```bash
npm run dev
```

Runs the application with auto-reload on file changes.

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start development server with file watching
- `npm test` - Run the test suite
- `npm run lint` - Check code style with ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run build` - Build the project

## API Endpoints

### GET /
Returns a welcome message.

```json
{
  "message": "Welcome to Microsoft VSCode Clone"
}
```

### GET /api/health
Returns the health status of the application.

```json
{
  "status": "healthy",
  "timestamp": "2026-06-22T12:00:00.000Z"
}
```

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment. The workflow:

- ✅ Runs on Node.js 18.x and 20.x
- ✅ Installs dependencies
- ✅ Runs linting checks
- ✅ Executes test suite
- ✅ Builds the project
- ✅ Generates code coverage reports
- ✅ Uploads artifacts for deployment

See `.github/workflows/ci.yml` for details.

## Testing

Tests are written using Node.js built-in test module.

```bash
npm test
```

## Code Quality

### Linting

```bash
npm run lint
npm run lint:fix
```

### Formatting

```bash
npm run format
```

## License

MIT - see LICENSE file for details

## Author

jvzhu
