# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2025-10-27
### Added
- **Interactive Demos**: Added a live playground for "Triage Agent" and "Data Extraction" using Gemini 2.5.
- **System Playground UI**: Added tabbed interface for switching between demo modes.
- **JSON Visualization**: Added formatted JSON output blocks to demonstrate structured AI responses.

### Changed
- Updated "Cipher" system prompt to version 1.2, improving context awareness of specific GitHub projects.
- Refactored `runDemoTask` in `aiService.ts` to handle specific JSON schema enforcement.

## [1.1.0] - 2025-10-20
### Added
- **"Cipher" AI Concierge**: Integrated Google GenAI SDK (`gemini-2.5-flash`) for real-time chat.
- **Terminal UI**: Created a floating modal with a terminal-inspired aesthetic for the chat interface.
- **Resume Data Injection**: Connected `data/content.ts` to the AI context window.

### Fixed
- Fixed a z-index issue where the navigation bar overlapped the mobile menu.
- Adjusted Tailwind config to support custom "Belizean Jungle" color palette extensions.

## [1.0.0] - 2025-10-01
### Added
- Initial release of the personal portfolio.
- **Components**: Hero, About, Capabilities, Projects, Experience.
- **Tech Stack**: React 18, Vite, TypeScript, Tailwind CSS.
- **Responsive Design**: Mobile-first architecture implemented.
