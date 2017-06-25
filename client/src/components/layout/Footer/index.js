import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer hidden-print">
                <div className="container-fluid">
                    <ul className="footer__menu pull-right">
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}