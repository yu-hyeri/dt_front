import React, { Component } from 'react';

export default class HandlerEx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello, World!',
        };
    }

    btnClick = () => {
        this.setState({ message: 'Goodbye, World!' });
    };

    render() {
        return (
            <>
                <div>HandlerEx</div>
                <h1>{this.state.message}</h1>
                <button onClick={this.btnClick}> 클릭 </button>
            </>
        );
    }
}
