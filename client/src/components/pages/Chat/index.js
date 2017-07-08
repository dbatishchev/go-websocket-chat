import React, {Component} from 'react';

export default class Chat extends Component {

    constructor(props) {
        super(props);
        this.onConnect = this.onConnect.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onMessage = this.onMessage.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            newMessage: {
                content: '',
            },
            messages: [],
        };

        this.ws = new WebSocket('ws://192.168.0.89:8000/ws');
        this.ws.onopen = this.onConnect;
        this.ws.onClose = this.onClose;
        this.ws.onmessage = this.onMessage;
    }

    onConnect() {
        console.log(111);
    }

    onClose(data) {
        console.log(222, data);
    }

    onMessage(message) {
        const messageData = JSON.parse(message.data);

        const messages = this.state.messages;
        messages.push(messageData);

        this.setState({
            messages: messages,
        });
    }

    onChange(e) {
        e.preventDefault();

        this.setState({
            newMessage: {
                content: e.target.value,
            },
        });
    }

    onSubmit(e) {
        e.preventDefault();

        this.ws.send(JSON.stringify(this.state.newMessage));
        this.setState({
            newMessage: {
                content: '',
            },
        });
    }

    render() {
        return (
            <div>
                <div className="messages">
                    {this.state.messages.map(message => (<div>{message.content}</div>))}
                </div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <textarea value={this.state.newMessage.content} onChange={this.onChange} className="form-control" id="message" placeholder="Type a message..." />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}
