var dotenv = require('dotenv');
dotenv.config();

// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the Region 
AWS.config.update({region: 'us-east-1'});

const accessKey = process.env.accessKey;
const secretAccess = process.env.secretAccessKey;

console.log(accessKey);
console.log(secretAccess);

// Create S3 service object
s3 = new AWS.S3({
  accessKey, secretAccess, apiVersion: '2006-03-01'});

// Call S3 to list the buckets
s3.listBuckets(function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});
