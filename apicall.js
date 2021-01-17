https = require('https');
request = require('request');

// https.get('https://api.chucknorris.io/jokes/random',(resp) => {
//   let data = '';
//   resp.on('data',(chunk) => {
//     data += chunk;
//   });
//
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation)
//   });
//
// }).on('error', (err) => {
//   console.log("Error: "+err.message);
// })

request('https://api.chucknorris.io/jokes/random', { json:true }, (err,res,body) => {
  if (err){
    return console.log(err);
  }
  // console.log(body.url);
  console.log(body.value);
})
