import * as React from "react";
import {Layout} from 'antd'

const {Footer} = Layout;
interface FooterItemProps extends  React.Props<any>{
    title: string;
    description: string;
}

export class PageFooter extends React.Component<FooterItemProps> {
    constructor(props : FooterItemProps){
        super(props);
        // set initial state
       // this.state = { editText: this.props.todo.title };
    }
    public render() { 
        return (
        <Footer className='main-footer'>
            {this.props.title}
            {this.props.description}
        </Footer>
        );
    }
}