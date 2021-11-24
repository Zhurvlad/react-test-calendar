import React, {FC} from 'react';

import {Layout, Row, Menu} from "antd";
import {useHistory} from 'react-router-dom'
import {RoutesNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
    const router = useHistory()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useActions()

    return (
        <Layout.Header>
            <Row justify="end">

                {isAuth
                    ? <>
                        <div style={{color: 'white'}}>
                            {user.username}
                        </div>
                        <Menu style={{width: 90}} theme="dark" mode="horizontal" selectable={false}>

                            <Menu.Item onClick={() => logout()} key={1}>Logout</Menu.Item>
                        </Menu>
                    </>

                    : <Menu style={{width: 90}} theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item onClick={() => router.push(RoutesNames.LOGIN)} key={1}>Login</Menu.Item>
                    </Menu>
                }

            </Row>
        </Layout.Header>
    );
};

export default Navbar;
