# Character Frequency Simulation

A statistical simulation tool that calculates the approximate probability of specific ASCII characters appearing in randomly generated strings.

## Overview

This project conducts simulations to prove the approximate value of how many times a certain ASCII character appears in pseudo-random strings. It compares theoretical probability with empirical results across multiple test iterations.

## Features

- Dual Implementation: CLI (Node.js) and browser-based versions
- Character Range Testing: Tests ASCII characters 33-124 (printable characters)
- Configurable Parameters: Adjust number of tests and characters per string
- Real-time Output: Console-based results display
- No Server Required: Everything runs locally from files

## Project Structure

| File | Purpose | Environment |
|------|---------|-------------|
| cli.js | Node.js command-line interface | ⭐ Recommended |
| index.html | Browser interface HTML structure | Browser |
| main.js | Browser interface JavaScript logic | Browser |
| style.css | Styling for browser interface | Browser |
| README.md | Project documentation | N/A |

## Installation & Setup

### Prerequisites

| Version | Requirement | Installation Link |
|---------|-------------|-------------------|
| CLI (Recommended) | Node.js 14.x or higher | nodejs.org |
| Browser | Any modern web browser | Already installed |

### Installing Node.js (For CLI Version)

#### Windows
1. Download from nodejs.org
2. Run the installer (choose LTS version recommended)
3. Restart terminal after installation
4. Verify: node --version && npm --version

#### macOS
Option A: Using Homebrew (Recommended)
brew install node

Option B: Direct Download
Download from nodejs.org and install the .pkg file.

#### Linux (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

#### Linux (Arch Linux)
sudo pacman -S nodejs npm

## Running the CLI Version (Recommended)

### Step 1: Navigate to Project Directory
cd /path/to/character-frequency-simulation

### Step 2: Run the CLI Application
node cli.js

### Step 3: Follow Interactive Prompts
The CLI will ask two questions:
1. How many per string: (e.g., 100)
2. How many tests per character: (e.g., 500)

Results are printed directly to the terminal with percentage calculations.

### Optional: Create Shell Scripts

Linux/macOS (run.sh):
#!/bin/bash
node "$(dirname "$0")/cli.js" "$@"
chmod +x run.sh
./run.sh

Windows (run.bat):
@echo off
node cli.js %*

## Running the Browser Version

No server setup required!

### Quick Start (Direct File Open)
- macOS: open index.html
- Linux: xdg-open index.html
- Windows: start index.html
- Alternative: Double-click index.html in file explorer

### Browser Version Features
- No setup required - just open the HTML file
- Visual interface with table-based input controls
- Real-time console - results scroll in designated div
- Reset buttons - clear inputs with one click

## Usage Guide

### CLI Interface (Recommended)
1. Run `node cli.js`
2. Enter desired values when prompted
3. Read results from terminal output
4. Press Ctrl+C to stop early

### Browser Interface
1. Open index.html in your browser
2. Configure parameters in the table inputs
3. Click Start button to begin simulation
4. View scrolling results in console area

## Why CLI is Recommended

| Feature | CLI Version | Browser Version |
|---------|-------------|-----------------|
| Performance | Fast, no UI blocking | Can freeze browser thread |
| Test scale | Unlimited | Limited by browser memory |
| Automation | Easy scripting | Manual interaction |
| Output clarity | Clean terminal output | Scrolling HTML text |
| Memory efficiency | Better | Higher overhead |

## Configuration Reference

| Parameter | CLI Prompt | Browser Input | Default | Recommended Range |
|-----------|------------|---------------|---------|-------------------|
| Characters per string | "How many per string" | num-chars | 50 | 50-1000 |
| Number of tests | "How many tests per character" | num-tests | 50 | 100-10000 |

Note: For browser version, keep test counts under 10,000 to avoid freezing.

## Theoretical Expectation

For a uniform random distribution across 92 ASCII characters (33-124):

| Metric | Value |
|--------|-------|
| Expected frequency per character | ~1.09% (1/92) |
| Variance | Decreases with more tests |
| Convergence | Follows law of large numbers |

## Known Issues

| Issue | Impact | Workaround |
|-------|--------|------------|
| Browser UI blocking | Page freezes during large tests | Use CLI version |
| Index mismatch | Loop offset in main.js | Expected 1.09% still holds |
| Global variable shadowing | Variables overwritten in main.js | CLI avoids this issue |
| No progress indicator | Unclear completion time | CLI shows immediate results |

## Troubleshooting

### CLI Issues
| Problem | Solution |
|---------|----------|
| node: command not found | Install Node.js from nodejs.org |
| Permission denied | chmod +x cli.js then node cli.js |
| Results seem wrong | Increase test count (>1000) |

### Browser Issues
| Problem | Solution |
|---------|----------|
| Page blank | Check browser console (F12) for errors |
| Styles broken | Verify style.css in same directory |
| UI frozen | Reduce test count or use CLI |

## Potential Improvements

- [ ] Async/Web Worker for browser to prevent UI blocking
- [ ] Chart/graph visualization (Chart.js or Vega-Lite)
- [ ] CSV/JSON export for data analysis
- [ ] Fix variable scoping in main.js
- [ ] Add progress bars and ETA estimates
- [ ] Statistical analysis (std dev, confidence intervals)

## Credits

Simulation methodology developed by Logan Webb and KJ Houser.

## License

MIT License - Feel free to use and modify for educational purposes.

## Support

For issues or questions, please refer to the repository issues or contact the maintainers.
