# WebGL Square Triangles

A small Three.js demo that renders a square from two colored triangles. The red and blue triangles share a diagonal, with white edge lines showing the geometry. The square rotates continuously and can be inspected with orbit controls.

## Run locally

Because the project uses JavaScript modules, serve the files over HTTP instead of opening the HTML file directly:

```bash
python3 -m http.server 8000
```

Open [http://localhost:8000/SquareTriangles.html](http://localhost:8000/SquareTriangles.html) in a browser.

## Files

- `SquareTriangles.html` - Page markup, styling, and the browser import map.
- `SquareTriangles.js` - Three.js scene, geometry, materials, animation, and resize handling.

## Requirements

- A modern browser with WebGL and ES module support.
- Internet access to load Three.js from the unpkg CDN.