You Should Know:
HTML
CSS Layout
Javascript Fundamentals
React
React Router

Your Mission
We're going to create a photo gallery application which allows users to view their albums as well as the individual photos contained within. We'll implement this as a single page application (SPA). Use the following wireframes as layout inspiration:

![Albums View](./wireframeImgs/AlbumMain.png)
![Album View](./wireframeImgs/AlbumPics.png)
![Individual Image View](./wireframeImgs/AlbumIndiPage.png)

Normal Mode
Challenge #1.1: Use your HTML & CSS knowledge to create the initial layouts for the SPA. Make sure you follow along with the wireframes above.

Challenge #1.2: Create a db.json file and use json-server to house all of your image and album data.

Challenge #1.3: Now that you've built the site layout, let's use React to make it dynamic. Make sure you can switch between your List, Album & Photo views without reloading the page. Clicking an Album should load a list of the photos, and clicking the photos should open them individually full-screen for viewing. Make sure you have a minimum of 6 photo albums with at least 3 photos each.

Hard Mode
Challenge #2.1: In addition to Normal Mode challenges, update your individual photo view to allow a user to navigate to other photos in the same album by clicking to the left/right of the photo currently being viewed.

Challenge #2.2: Add the ability to add new photos to albums. You don't need to save the photos anywhere, but they should be added to the DOM and visible until the page is reloaded. Instead of trying to upload files, just add URL's to remote images. You should be able to add these photos via a simple form. Don't forget to update your Github respository.

Epic Mode
Challenge #3.1 Add the ability for a use to uplaod an image. You are allowed to use a service like Cloudinary if you so choose.

You May Need
Free photos from Unsplash

-------------------------------------------
-------------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
