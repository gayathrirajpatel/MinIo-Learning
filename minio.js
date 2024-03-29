

// MinIo

var Minio = require('minio')

// Instantiate the minio client with the endpoint
// and access keys as shown below.
var minioClient = new Minio.Client({
  endPoint: 'play.min.io',
  port: 9000,
  useSSL: true,
  accessKey: 'Q3AM3UQ867SPQQA43P2F',
  secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG',
})

// File that needs to be uploaded.
var file = '/workspaces/MinIo-Learning/mdf.js'

// Make a bucket called europetrip.
minioClient.makeBucket('indiatrip6', 'us-east-1', function (err) {
  if (err) return console.log(err)

  console.log('Bucket created successfully in "us-east-1".')

  var metaData = {
    'Content-Type': 'application/octet-stream',
    'X-Amz-Meta-Testing': 1234,
    example: 5678,
  }
  // Using fPutObject API upload your file to the bucket europetrip.
  minioClient.fPutObject('indiatrip6', 'fileC.js', file, metaData, function (err, etag) {
    if (err) return console.log(err)
    console.log('File uploaded successfully.')
  })
})
