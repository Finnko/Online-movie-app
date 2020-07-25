import {ServerCodes} from '../const';

const apiMockHandlers = {
  handleUnauthorized: () => {},
  handleNoResponse: () => {},
  handleNotFound: () => {},
  handleBadRequest: () => {},
};

const promisifyApiMockReply = (data = []) => {
  return new Promise((resolve) => {
    if (Math.random() > 0.01) {
      resolve([ServerCodes.SUCCESS, data]);
    } else {
      resolve(ServerCodes.BAD_REQUEST);
    }
  });
};

export {
  promisifyApiMockReply,
  apiMockHandlers,
};
