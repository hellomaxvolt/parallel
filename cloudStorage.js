/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const bucketName = 'parallel-app-capstone';
// const filename =
//   '/Users/brandieburditt/Downloads/Eiffel-Tower-4c710a32fca4406c81f49815312339c7.jpg';

// Imports the Google Cloud client library
const { Storage } = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();

async function uploadFile(filename) {
  try {
    // Uploads a local file to the bucket
    await storage.bucket(bucketName).upload(filename, {
      // Support for HTTP requests made with `Accept-Encoding: gzip`
      gzip: true,
      // By setting the option `destination`, you can change the name of the
      // object you are uploading to a bucket.
      metadata: {
        // Enable long-lived HTTP caching headers
        // Use only if the contents of the file will never change
        // (If the contents will change, use cacheControl: 'no-cache')
        cacheControl: 'public, max-age=31536000',
      },
    });

    console.log(`${filename} uploaded to ${bucketName}.`);
  } catch (error) {
    console.log('cloudStorage.js error:', error);
  }
}

uploadFile().catch(console.error);
