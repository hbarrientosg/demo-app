
let done = 0; 

module.exports = (req, res, next) => {
  switch (req.url) {
    case '/classifications/1?assignmentId=1': {
      done += 1;
      if (done === 10) {
        res.jsonp({ done: true });
        done = 0;
      } else {
        res.jsonp({ done: false });
      }
      break;
    }
    default:
      break;
  }

  next();
};