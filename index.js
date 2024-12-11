```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleRedirect}>Go to Home</button>
    </div>
  );
}
```
This revised solution separates the redirect logic from the `Link` component's `onClick` handler.  The `handleRedirect` function is now solely responsible for redirecting using `router.push`, which will execute reliably regardless of whether the `Link` is active.