import React from 'react';
import './CalendarPage.css';
import { Calendar, Badge } from 'antd';

class CalendarPage extends React.Component {
    constructor(props: any) {
        super(props);
        this.dateCellRender = this.dateCellRender.bind(this);
        this.monthCellRender = this.monthCellRender.bind(this);
    }
    getListData(value: any) {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                ];
                break;
            case 10:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                    { type: 'error', content: 'This is error event.' },
                ];
                break;
            case 15:
                listData = [
                    { type: 'warning', content: 'This is warning event' },
                    { type: 'success', content: 'This is very long usual event。。....' },
                    { type: 'error', content: 'This is error event 1.' },
                    { type: 'error', content: 'This is error event 2.' },
                    { type: 'error', content: 'This is error event 3.' },
                    { type: 'error', content: 'This is error event 4.' },
                ];
                break;
            default:
        }
        return listData || [];
    }

    dateCellRender(value: any) {
        const listData = this.getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge status='success' text={item.content} />
                    </li>
                ))}
            </ul>
        );
    }

    getMonthData(value: any) {
        if (value.month() === 8) {
            return 1394;
        }
    }

    monthCellRender(value: any) {
        const num = this.getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    }

    render() {
        return (
            <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
        )
    }
}

export default CalendarPage;