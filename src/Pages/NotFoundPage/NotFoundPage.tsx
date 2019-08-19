import React from 'react';
import './NotFoundPage.css';
import { Result, Button } from 'antd';

class NotFoundPage extends React.Component {

    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            />
        )
    }
}

export default NotFoundPage;