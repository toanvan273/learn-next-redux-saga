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
    