# Next.js 15 router.push Issue within Link Component

This repository demonstrates a potential issue with `router.push` in Next.js 15 when used within the `onClick` handler of a `Link` component.  The redirect might not happen as expected if the `Link` is already active.

## Bug Description

When navigating between pages using a `Link` component, and then attempting to use `router.push` to redirect to another page within the `onClick` handler, the redirect may not execute reliably if the `Link` is currently active, leading to confusion.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the `/about` page.
5. Click the button to redirect to the home page.
6. Observe that the redirection may not work as expected.

## Potential Solution

Instead of relying on `router.push` within the `onClick` handler of the `Link` component, consider alternative approaches like directly using `router.push` within a separate function triggered by a button, or restructuring the component's logic to avoid this scenario.
