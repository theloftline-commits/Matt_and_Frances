# Asset Management

To replace the images on the site:

1.  **Locate the `public/` folder** in the project root.
2.  **Add your Main Photo**:
    *   Copy your desired image into `public/`.
    *   Rename it to `hero.png` (this will automatically overwrite the placeholder).
    *   *OR* keep your filename (e.g., `IMG_123.jpg`) and update `index.html`:
        ```html
        <img src="/IMG_123.jpg" ... />
        ```

3.  **Add the Hotel Photo**:
    *   Copy your hotel image into `public/`.
    *   Rename to `hotel.png` or update `index.html` as above.

## Note on Paths
Images in the `public` folder are served at the root `/`. So `public/my-image.jpg` is accessed via `src="/my-image.jpg"`.
