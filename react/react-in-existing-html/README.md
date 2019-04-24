Add JSX to a Project
Step 1: Run npm init -y (if it fails, here’s a fix)
Step 2: Run npm install babel-cli@6 babel-preset-react-app@3
Step 3: Create a folder called src
Step 4: npx babel --watch src --out-dir . --presets react-app/prod 