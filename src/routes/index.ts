import React from 'react'
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
    path: string;
    components: React.ComponentType;
    exact?: boolean
}

//Создаём словарь констрант
export enum RoutesNames {
    LOGIN= '/login',
    EVENT= '/'
}

//Создаём массив роутов которые будем парсить а App для уменьшения кода
export const publicRoutes: IRoute[] = [
    {path: RoutesNames.LOGIN, exact:true, components: Login}
]


export const privateRoutes: IRoute[] = [
    {path: RoutesNames.EVENT, exact:true, components: Event}
]
