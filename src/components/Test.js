import React, { Component } from 'react';

class Test extends Component {
    state = { time: 0 }
    render() {
        return (
            <div className="card">
                <h5 className="card-header">(header)Featured</h5>
                <div className="card-body">
                    <h5 className="card-title">(Body) Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Go somewhere (footer)</a>
                </div>
            </div>
        );
    }
}

export default Test;
