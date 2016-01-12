// let my_client_id = '6a9ba68b893b4123ab36de98ebb6058d';
// let my_secret = '8a980dcd77da46e7814b1c9b918e53ce';
//
// import https from 'https';
//
// let url = 'https://api.spotify.com/v1/';
// let request = https.get(url + 'search?q=drake&type=artist', (response) => {
//   let body = '';
//   response.on('data', (chunk) => {
//     body += chunk;
//   });
//   response.on('end', () => {
//     console.log(body);
//     try {
//       console.log(JSON.parse(body));
//     } catch (e) {
//       console.log('error');
//     }
//   });
// });
