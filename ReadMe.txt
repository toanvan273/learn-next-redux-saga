Hướng dẫn xây dựng luồng chạy với Next-Redux-Saga

+++++++++++++++++++++

B1: tạo const cho action.
    - Vào file action/types.js
    - tạo const với cấu trúc sau:
    export const GET_DATA = 'GET_DATA'
    export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
    export const GET_DATA_ERR = 'GET_DATA_ERR'

B2: Viết các action.
    - tạo 1 file vd: userAction.js trong folder action
    - Viết tối đa 3 hàm cho 1 action với các trường hợp
        + action
        + action_success
        + action_error
    - VD cho action getUser có cấu trúc sau:
        export const getUser = () => ({
            type: types.GET_USER
        })
        export const getUserSuccess = (data) => {
            return {
                type: types.GET_USER_SUCCESS,
                data
            }
        }
        export const getUserErr = (err) => ({
            type: types.GET_USER_ERR,
            err
        })

B3: Viết reducer
    - tạo 1 file vd: userReducer.js trong folder reducer
    - Khởi tạo 1 initialState với mục tiêu cấu hình các loại dữ liệu trả về từ server
    - VD: 
        export const initialState = {
            data: null,
            type:null,
            err: null
        }
    - viết function reducer với 2 param là (state, action)
    - VD:
        export default function userReducer(state = initialState, action) {
            switch (action.type) {
                case types.GET_USER_SUCCESS:
                return {
                    ...state,
                    type:null,
                    data: action.data
                }
                case types.GET_USER_ERR:
                return {
                    ...state,
                    type:null,
                    err: action.err
                }
                default:
                return state
            }
        }
    - Lưu ý khi viết reducer: sau mỗi case thì phần return chính là phần xử lý dữ liệu để tạo ra new state của dự án,
    - phần default: luôn return state
    - Cuối cùng import reducer vào file rootReducer.js

B4: Viết Saga
    - Trước hết cần nắm vững các function helper (redux-saga/effects) trong Saga bao gồm:
        + Non-blocking: fork
        + Bocking: take, call
        + function: select, put, takeEvery, takeLatest, delay ...
    - Hiểu về Generator function và Yield trong javascript (https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Statements/function*)
    - VD về getUser
        + Trong folder saga tạo 1 file userSaga.js
        + tạo function* getUser(){
            /**  **/
             while (true) { 
                 /** trong function* luôn dùng yield để thực hiện hàm sau nó xong, trả về kết quả, mới chạy hàm ở dưới **/
                /** dùng hàm take để lắng nghe 1 action, cho đến khi action được gọi (action GET_USER), rồi mới chạy những hàm ở dưới **/
                yield take(types.GET_USER) 
                try {
                    /** dùng axios để gọi api, có thể kết hợp helper call của saga để giao tiếp với api **/
                    const res = yield Axios.get(apiGetUser)
                    console.log(res);
                    const { data } = res
                    /** Khi có kết quả (res) trả về thì dispatch action getUserSuccess bằng hàm put**/
                    yield put(actionUser.getUserSuccess(data))
                } catch (err) {
                    console.log(err);
                    /** khi kết quả trả về lỗi thì dispatch action getUserErr**/
                    yield put(actionUser.getUserErr(err))
                }
            }
        }
        + tạo hàm function* userSaga() để theo dõi tất cả các saga của user (bao gồm: getUser, addUser, updateUser và deleteUser)
        + Cấu trúc function* userSaga() {
            yield fork(getUser)
        }
        + export default userSaga
        + Cuối cùng import userSaga vào file rootSaga.js

B5: Kiểm tra lại luồng chạy tại page (Component)
    - import {connect} từ 'react-redux', để kết nối component với store
    - tạo 2 function: mapStateToProps và mapDispatchToProps để lấy các state trong store và dispatch các action
    - dispatch action getUser tại componentDidMount()
    - nhận new state tại UNSAFE_componentWillReceiveProps()
