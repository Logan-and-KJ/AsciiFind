# Character Frequency Simulation

A statistical simulation tool that calculates the approximate probability of specific ASCII characters appearing in randomly generated strings.

## Overview

This project conducts simulations to prove the approximate value of how many times a certain ASCII character appears in pseudo-random strings. It compares theoretical probability with empirical results across multiple test iterations.

## Features

- **Dual Implementation**: Both CLI (Node.js) and browser-based versions
- **Character Range Testing**: Tests ASCII characters 33-124 (printable characters)
- **Configurable Parameters**: Adjust number of tests and characters per string
- **Real-time Output**: Console-based results display
- **Visual Interface**: Clean dark-themed UI with tabular controls

## Project Structure

| File | Purpose | Environment |
|------|---------|-------------|
| `cli.js` | Node.js command-line interface | Server/CLI |
| `index.html` | Browser interface HTML structure | Browser |
| `main.js` | Browser interface JavaScript logic | Browser |
| `style.css` | Styling for browser interface | Browser |
| `README.md` | Project documentation | N/A |

---

## Installation & Setup

### Prerequisites

- **For CLI Version**: Node.js 14.x or higher
- **For Browser Version**: Any modern web browser (Chrome, Firefox, Safari, Edge)
- **Optional**: Local development server (Python, Node.js, or any HTTP server)

---

## Running the Browser Version

### Option 1: Direct File Open (Simple)

The simplest way to run the browser version is to open `index.html` directly:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html

# Or double-click the file in your file explorer
