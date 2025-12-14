# Contributing to Dimitri Arnold's Portfolio

First off, thanks for taking the time to view and contribute to this project!

Although this is a personal portfolio, I welcome suggestions for improvements, bug fixes in the logic, or optimizations for the AI integration.

## How to Contribute

1.  **Fork the repository** to your own GitHub account.
2.  **Clone the project** to your machine.
3.  **Create a branch** locally with a succinct name that describes your change.
    ```bash
    git checkout -b fix/mobile-navigation-bug
    # or
    git checkout -b feat/add-dark-mode-toggle
    ```
4.  **Sign your commits**. This is a good practice for verifying authorship.
5.  **Submit a Pull Request** to the `main` branch.

## Development Standards

### Code Style
*   **TypeScript**: Use strict typing. Avoid `any` wherever possible.
*   **Tailwind**: Use utility classes. Do not write custom CSS unless absolutely necessary (e.g., for complex animations).
*   **Components**: Keep components small and functional. Place reusable logic in hooks or services.

### AI Integration
*   If modifying `services/aiService.ts`, ensure you do not expose the API key in client-side logs.
*   Test the "Cipher" agent to ensure it adheres to the system instructions and does not hallucinate non-existent projects.

## Reporting Issues

If you find a bug or have a feature request, please use the [Issues](https://github.com/Dim-dawg/portfolio/issues) tab.
