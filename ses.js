// JavaScript File

console.log("Sending an email using AWS SES.....");

 var AWS = require('aws-sdk');
 AWS.config.update(
     {
        region: 'us-east-1'
     }
 );

var params = {
  Destination: { /* required */
    
    ToAddresses: [
      'rasmi.tiku@gmail.com',
      /* more items */
    ]
  },
  Message: { /* required */
    Body: { /* required */
      Html: {
      Charset: "UTF-8",
      Data: "HTML_FORMAT_BODY"
      },
      Text: {
      Charset: "UTF-8",
      Data: "TEXT_FORMAT_BODY"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Test email'
     }
    },
  Source: 'rasmi.tiku@gmail.com', /* required */
  ReplyToAddresses: [
     'rasmi.tiku@gmail.com',
    /* more items */
  ],
};

// Create the promise and SES service object
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });