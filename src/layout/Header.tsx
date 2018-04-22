import * as React from "react";
import {Layout} from 'antd'

const {Header} = Layout;
interface HeaderItemProps extends  React.Props<any>{
    title: string;
    description: string;
}

export class PageHeader extends React.Component<HeaderItemProps> {
    constructor(props : HeaderItemProps){
        super(props);
        // set initial state
       // this.state = { editText: this.props.todo.title };
    }
    public render() { 
        return (
        <Header className='main-header'>
            {this.props.title}
            {this.props.description}
        </Header>
        );
    }
}