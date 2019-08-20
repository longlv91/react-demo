import React from 'react';
import './ServerErrorPage.css';
import { Result, Button } from 'antd';

class ServerErrorPage extends React.Component {

    render() {
        return (
            <Result
                status="500"
                title="500"
                subTitle="Sorry, the server is wrong."
                extra={<Button type="primary">Back Home</Button>}
            />
        )
    }
}

export default ServerErrorPage;