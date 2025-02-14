```javascript
// pages/about.js
import { ErrorBoundary } from 'next/error-boundary';

function MyErrorBoundary({ error }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>Error details: {error.message}</p>
    </div>
  );
}

export default function About() {
  // This will now be caught by the ErrorBoundary
  throw new Error('Something went wrong!');
}

About.ErrorBoundary = MyErrorBoundary;
```