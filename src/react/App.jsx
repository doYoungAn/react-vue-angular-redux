import React, { Component } from 'react';
import { connect } from 'react-redux';
import { syntaxHighlight } from './../utils';
import { increment, decrement, addUser, deleteUser } from './store/actions';

class App extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            user: ''
        }
        this.syntaxHighlight = this.syntaxHighlight.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        console.log('루트 리액트', this);
    }

    handleChange(event) {
        this.setState({ user: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddUser(this.state.user);
        this.setState({ user: '' });
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
                        <button onClick={this.props.onIncrement}>증가</button>
                        <button onClick={this.props.onDecrement}>감소</button>
                    </div>
                    <ul>
                        { this.props.users.map((user, index) => {
                            return  <li>
                                        <span>{ user }</span>
                                        <button onClick={() => { this.props.onDeleteUser(index) }}>-</button>
                                    </li>
                        }) }
                    </ul>
                    <form onSubmit={this.handleSubmit}>
                        <input class="input" type="text" value={this.state.user} onChange={this.handleChange}/>
                        <button type="submit">등록</button>
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

let mapToDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement()),
        onAddUser: (user) => dispatch(addUser(user)),
        onDeleteUser: (index) => dispatch(deleteUser(index))
    }
}

App = connect(mapToStateToProps, mapToDispatchToProps)(App);

export default App;