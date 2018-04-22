import * as React from 'react';
import {Layout} from 'antd'

const { Header, Content, Sider, Footer } = Layout;
interface MainProps extends React.Props<any> {
    children: any
}

class Main extends React.Component<MainProps,{}> {
    constructor(props : MainProps){
        super(props);
        // set initial state
       // this.state = { editText: this.props.todo.title };
    }
   public render() {
        return(
            <div>
                <Layout>
                    <Header>header</Header>
                    <Layout>
                        <Sider>left sidebar</Sider>
                        <Content>{this.props.children}</Content>
                        <Sider>right sidebar</Sider>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </div>
        );
    }
}

export default Main;