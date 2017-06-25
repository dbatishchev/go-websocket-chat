import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar--header hidden-print">
                <div className="navbar-container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}