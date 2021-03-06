import NameSpace from '../../name-space';

const NAME_SPACE = NameSpace.USER;

const getLoadingStatus = (state) => state[NAME_SPACE].loading;

const getErrorStatus = (state) => state[NAME_SPACE].error;

const getAuthStatus = (state) => state[NAME_SPACE].authStatus;

const getUser = (state) => state[NAME_SPACE].user;

export {
  getLoadingStatus,
  getErrorStatus,
  getAuthStatus,
  getUser,
};
