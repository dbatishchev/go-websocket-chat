

## Installation

```sh
go get ./...
npm install
```

## Tests

To install test framework copy and past this command:

```sh
npm install --global jest
```

To run test suites:

```sh
npm test
```

To see coverage:

```sh
npm test --coverage
```

Jest will run anything in the __tests__ directory by default. Jasmine is the default runner for Jest, so we have access to describe, it, and expect without configuring anything.

## How to start

Install dependencies:

```sh
npm install
```

In Webstorm/Phpstorm open "Preferences" -> "Language & Frameworks" -> "Javascript" -> "Code Quality Tools" -> "ESLint" and choose ESLint bin in node_modules dir.

Click the right mouse button on "react" dir and choose "Mark Directory as" -> "Resource Root"