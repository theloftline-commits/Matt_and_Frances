# How to Deploy Your Wedding Site

Since this is a static site built with Vite, it's very easy to host for free.

## Option 1: Vercel (Recommended for ease)
1.  **Create a GitHub Repository**: Push this code to a new repo on your GitHub.
2.  **Go to Vercel.com**: Sign up/Log in.
3.  **Add New Project**: Import your GitHub repo.
4.  **Deploy**: Vercel detects Vite automatically. Just click "Deploy".
    *   Build Command: `npm run build`
    *   Output Directory: `dist`
5.  **Done**: You'll get a URL like `matt-and-frances.vercel.app`. You can connect a custom domain (e.g., `mattandfrances.com`) in Vercel settings.

## Option 2: Netlify (Drag & Drop)
1.  **Run Build Locally**:
    ```bash
    npm run build
    ```
2.  This creates a `dist` folder in your project.
3.  **Go to Netlify.com**: Sign up/Log in.
4.  **Drag & Drop**: Drag the `dist` folder directly onto the Netlify dashboard.
5.  **Done**: Site is live.

## Option 3: GitHub Pages
1.  Update `vite.config.js` to set `base: '/repo-name/'`.
2.  Run `npm run build`.
3.  Push the `dist` folder to a `gh-pages` branch.
