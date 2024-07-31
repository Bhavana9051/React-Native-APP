// import Bugsnag from '@bugsnag/expo';

const log = (error) => {
  console.log(error);
  // Bugsnag.notify(error);
};

const start = () => {
  // Bugsnag.start();
};

export default {
  log,
  start,
};
