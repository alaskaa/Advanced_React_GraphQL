import React from 'react';
import Meta from './Meta';
import Header from './Header';

class Page extends React.Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default Page;