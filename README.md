# Unhandled error in Next.js 15 pages/about.js

This repository demonstrates a common error encountered in Next.js 15 applications, where an unhandled error in a page component leads to a non-user-friendly error message.

The `pages/about.js` file throws an error.  The solution demonstrates how to properly handle this error using `Error Boundaries` and provide a better user experience.

## How to reproduce:

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`. You'll see an error.

## Solution:

The solution employs Next.js's built-in error boundaries to gracefully handle the error.  The improved user experience offers a more informative message and prevents the application from crashing.