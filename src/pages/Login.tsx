import React, {FC} from 'react';
import {Card, Row} from "antd";
import LoginForm from "../components/LoginForm";

const Login:FC = () => {
    return (
        <div>
            <Row justify={'center'} align={'middle'} className={'h100'}>
               <Card>
                   <LoginForm/>
               </Card>
            </Row>
        </div>
    );
};

export default Login;
