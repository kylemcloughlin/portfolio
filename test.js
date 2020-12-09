var AWS = require("aws-sdk");
console.log('hit')
// console.log(AWS)
AWS.config.getCredentials(function (err) {
  console.log('hit')
 
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
  }
});