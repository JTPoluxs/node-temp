const os = require('os');

// info about current user
const user = os.userInfo();

// method return the system uptime in seconds


console.log(`The Sysmtem Uptime is ${os.uptime / 60} minutes`);

const currentOS = {
  name: os.type(),
  relase: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);