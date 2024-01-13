var dotenv = require('dotenv');
dotenv.config();

// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the Region 
AWS.config.update({region: 'us-east-1'});

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccess = process.env.AWS_SECRET_ACCESS_KEY;

// Create S3 service object
s3 = new AWS.S3({
  accessKeyId, secretAccess, apiVersion: '2006-03-01'});

// Call S3 to list the buckets
s3.listBuckets(function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});
