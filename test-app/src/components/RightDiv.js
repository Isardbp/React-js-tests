import React, { Component } from 'react';

import {all} from "../userinfo.json";


class RightDiv extends Component{

    constructor() {
    super();
    this.state = {
        all
    }
    }

    render(){

    const friends = this.state.all.contacts.map((contacts, i) => {
            return (
                <div className="card mb-2">
                    <div className="card-header text-left">
                    {contacts.name}
                    </div>
                </div>
            )
        });

        return (
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item w-100">
                            <a className="nav-link active" href="#">Friends</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    {friends}
                </div>
            </div>
        )
    }
}



export  default  RightDiv;