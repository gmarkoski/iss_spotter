// const { fetchMyIP } = require("./iss-promised");
// const {fetchCoordsByIP} = require('./iss-promised');
// const { fetchISSFlyOverTimes } = require("./iss-promised");

const { nextISSTimesForMyLocation } = require("./iss-promised");

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })

  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });



/* system returns this error
 //labber@DESKTOP-VB49Q2R:~/w2/d4-api/iss_spotter$ node index2.js
(node:13092) UnhandledPromiseRejectionWarning: StatusCodeError: 500 - "<html>\r\n<head><title>500 Internal Server Error</title></head>\r\n<body>\r\n<center><h1>500 Internal Server Error</h1></center>\r\n<hr><center>nginx</center>\r\n</body>\r\n</html>\r\n" 
*/