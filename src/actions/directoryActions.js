import * as web from '../WebAPI';
import * as dir from '../constants/directoryActionTypes';

const getList = () => ({
    type: dir.GET_LIST,
    payload: web.getList()
});

export {
    getList
};
