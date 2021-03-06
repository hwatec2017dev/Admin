﻿import * as React from 'react';

export default class Header extends React.Component<any, any> {
    render() {
        return (
            <div id="header" style={{ margin: 'auto', display: 'flex', flexDirection: 'row' }}>
                <i className="material-icons" style={{ cursor: 'pointer' }} onClick={e => this.props.onSidebarToggle() }>
                    menu
                </i>
                <h1>AutoQuery</h1>
                {this.props.title == null ? <div style={{flex:1}} /> : (
                    <div id="header-content" style={{ display: 'flex', flex: 1 }}>
                        <div>
                            <div className="seperator"></div>
                        </div>
                        <h2>{this.props.title}</h2>
                        <div style={{ margin: 'auto', flex: 1 }}></div>
                    </div>
                )}
            </div>
        );
    }
}