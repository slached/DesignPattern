# Design Patterns in Node.js

This repository explores the implementation of basic **Design Patterns** in Node.js, both **manually** and using Node.js libraries. It aims to help you understand the goals of these patterns, their practical applications, and the differences between solutions provided by libraries and custom implementations.

---

## Repository Purpose

1. **Deepen Knowledge of Design Patterns**: Learn popular design patterns conceptually and practically.
2. **Explore Application Differences**: Compare manual implementations with solutions provided by common Node.js libraries.
3. **Improve Code Quality**: Learn to write modular and testable code that follows best practices in software design.

---

## Covered Design Patterns

This repository includes the following design patterns:

### 1. **Dependency Injection (DI)**

- **Purpose**: Improve testability, scalability, and maintainability by reducing class dependencies.
- **Library-Supported Implementation**: Using [Awilix](https://www.npmjs.com/package/awilix) or [InversifyJS](https://www.npmjs.com/package/inversify).
- **Manual Implementation**: Injecting dependencies via constructors.

### 2. **Factory Pattern**

- **Purpose**: Abstract object creation logic to provide polymorphism and abstraction.
- **Library-Supported Implementation**: Using constructors or abstraction libraries.
- **Manual Implementation**: Defining custom factory methods.

### 3. **Singleton Pattern**

- **Purpose**: Ensure a class has only one instance and provide a global access point to it.
- **Library-Supported Implementation**: Using Node.js module caching.
- **Manual Implementation**: Limiting object creation with static properties.

---

## Project Structure

The repository is structured in a modular way for clarity and maintainability:

```plaintext
.
└── patterns
    ├── dependency-injection
    ├── factory
    └── singleton
├── README.md
└── package.json

## Running Instructions
