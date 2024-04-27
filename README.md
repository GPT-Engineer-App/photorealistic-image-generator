# photorealistic-image-generator

Create an app that allows users to input a description of an image they want to generate. The app will use the following API endpoint to generate four photorealistic images based on the user’s input: https://api.getimg.ai/v1/essential/text-to-image.

When a user submits their description, the app should format their request to include the image style as “photorealism”, set both the height and width to 1024 pixels, and specify the output format as “jpeg”. The app will take the user’s text and insert it into the “prompt” field of the JSON body for the POST request.

The API request will use a provided bearer token for authorization. The app should handle the JSON response to extract the image URLs and display the resulting images to the user.

The app should ensure that the input from the user does not exceed any character limits set by the API, and it should provide feedback if the request is successful or if there are any errors. It should be able to handle multiple user sessions simultaneously without conflicts.

Ensure that the app has error handling for cases such as invalid input, network issues, or any API-specific errors that may occur.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/photorealistic-image-generator.git
cd photorealistic-image-generator
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
