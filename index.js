var dotenv = require('dotenv');
dotenv.config();

// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// var filePath = require('./mdf');
var fs = require('fs');
const { error } = require('console');
const { listenerCount, listeners } = require('process');
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


bucketName = "upload-media-through-nodejs"
newFileName = "file.js"
filePath = "/workspaces/MinIo-Learning/mdf.js"
console.log(filePath)
function uploadFile(filePath, bucketName , newFileName){
  const fileStream = fs.createReadStream(filePath);
  fileStream.on('error', (err) => {
    console.log("FileError :"+ err)
  })

const params = {
  Bucket: bucketName,
  Key: newFileName,
  Body: fileStream
}

s3.upload(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log("Success",data.location);           // successful response
});
}
uploadFile(filePath, bucketName , newFileName);


