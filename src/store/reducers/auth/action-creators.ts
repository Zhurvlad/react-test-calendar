import {AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";
import UserService from "../../../api/UserService";


export const AuthActionsCreators = {
    setUser: (user: IUser):SetUserAction => ({ type: AuthActionsEnum.SET_USER, payload: user}),
    setIsAuth: (payload:boolean):SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload}),
    setError: (payload:string): SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionsCreators.setIsLoading(true))
            setTimeout(async () => {
                const response = await UserService.getUsers()
                const mockUsers = response.data.find(user => user.username === username && user.password === password)
                if(mockUsers) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUsers.username)
                    dispatch(AuthActionsCreators.setUser(mockUsers))
                    dispatch(AuthActionsCreators.setIsAuth(true))
                }else {
                    dispatch(AuthActionsCreators.setError('Не верный логин или пароль'))
                }
                dispatch(AuthActionsCreators.setIsLoading(false))
            }, 1000)

        }catch (error) {
           dispatch(AuthActionsCreators.setError("Произошла ошибка при логине"))
        }
    },

    logout: () => async (dispatch: AppDispatch) => {
           localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthActionsCreators.setIsAuth(false))
            dispatch(AuthActionsCreators.setUser({} as IUser))
    }
}