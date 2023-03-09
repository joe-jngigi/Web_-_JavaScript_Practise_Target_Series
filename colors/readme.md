# Adding Tailwind

You first have to initialize using `npm init` to be able to install the folder to allow the isnstallation of the Tailwind packages</br>
Use the following commands to intsall tailwind</br>

Install the Tailwind</br>
`npm install -D tailwindcss postcss autoprefixer`</br>

Run this to create in init the tailwind.config.js to setud the modules</br>
`npx tailwindcss init`</br>

Copy the necessary tailwind files to setup paths and plugins from [Here](https://tailwindcss.com/docs/installation)

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Create a **main.css** and copy the following

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Run the following command in your terminal to process your files</br>
`npx tailwindcss build main.css -o output.css`</br>

Add this to your HTML file</br>
`<link href=”./output.css” rel=”stylesheet”>`

[TailwindConfiguration](https://tailwindcss.com/docs/content-configuration)
