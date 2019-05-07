import React from 'react';
import './App.css';
import { add } from './math.js';
import CodeSplitting from './component/codeSplitting/CodeSplitting';
import ContextDemo from './component/context/ContextDemo';
import ErrorBoundary from './component/errorBoundary/ErrorBoundary';
import MyComponent from './component/errorBoundary/MyComponent';
import BottonHolder from './component/forwardingRef/ButtonHolder';

// it won't create a separate chunk as modules has been imported alrady
import('./math').then(math => console.log(math.add(2, 7)));
// When Webpack comes across this syntax, it automatically starts code-splitting your app
// and creates a new chunk for imported and modules and it's transitive 
import('./math.1').then(math => console.log(math.add(2, 7)));

const importModule = () => {
  import('./math.2').then(math => console.log(math.add(2, 7)));
}

const App = () => {
  return (
    <>
      <div className="App">{add(2, 4)}</div>
      <button onClick={importModule} >dynamic import</button>

      <CodeSplitting />
      <ContextDemo />
      {/* Error Boundaries were designed by default in the development 
      environment not to show fallback interface on purpose. */}
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
      <BottonHolder />
    </>
  );
}

export default App;
