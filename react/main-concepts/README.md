1. npm init -y:
- initializes the node project, the -y flag is used to skip all the questions with default answers.

2. npm install react react-dom --save:
- node_modules folder will store all the modules and their dependencies.
- package.json holds information about name, dependencies and more scripts.
- package-lock.json is used for dependency integrity, there’s no ‘runs fine on my computer’.
- save would save the modules as dependencie in package.json

3. npm install webpack webpack-dev-server webpack-cli -- save-dev:
- --save-dev flag saves these as the development dependencies. They won’t be a part of the final build that’s deployed on the server

4. npm i @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev:
- for setting up babel

5. .babelrc:
- for configuring babel

6. index.html:
- This will be the main file served to the browser
- The script bundle.js will be created using webpack, which will contain all our react code, including react library and renderer, in proper format.

7. index.js:
- mounts main app component into html 
