import React, { Component } from 'react';
import { connect } from 'react-redux';
import { syntaxHighlight } from './../utils';

class App extends Component {

    constructor(prop) {
        super(prop);
        this.syntaxHighlight = this.syntaxHighlight.bind(this);
    }

    componentWillMount() {
        console.log('루트 리액트', this);
    }

    syntaxHighlight(json) {
        return syntaxHighlight(json);
    }

    render() {
        return (
            <div class="wrapper">
                <h1>React</h1>
                <pre dangerouslySetInnerHTML={{__html: this.syntaxHighlight(this.props.all)}}></pre>
                <div class="content">
                    <div>
                        <span>{ this.props.count }</span>
                        <button>증가</button>
                        <button>감소</button>
                    </div>
                    <ul>
                        { this.props.users.map((user, index) => {
                            return  <li>
                                        <span>{ user }</span>
                                        <button>-</button>
                                    </li>
                        }) }
                    </ul>
                    <form action="">
                        <input class="input" type="text"/>
                        <button>등록</button>
                    </form>
                </div>
            </div>
        );
    }
}

let mapToStateToProps = (state) => ({
    all: state,
    count: state.count,
    users: state.users
});

App = connect(mapToStateToProps)(App);

export default App;