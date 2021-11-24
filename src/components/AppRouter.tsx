import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, RoutesNames} from "../routes";
import {useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";


const AppRouter = () => {
 const {isAuth} = useTypedSelector(state => state.auth)

    return (
        isAuth
            ? <Switch>
                {privateRoutes.map(route => (
                    <Route
                        key={route.path}
                        exact={route.exact}
                        component={route.components}
                        path={route.path}
                    />
                ))}

                <Redirect to={RoutesNames.EVENT}/>
            </Switch>

            : <Switch>
                {publicRoutes.map(route => (
                    <Route
                        key={route.path}
                        exact={route.exact}
                        component={route.components}
                        path={route.path}
                    />
                ))}

                <Redirect to={RoutesNames.LOGIN}/>
            </Switch>
    );
};

export default AppRouter;
