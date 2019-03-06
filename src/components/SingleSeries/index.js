import React, { Component } from 'react';

class SingleSeries extends Component {
    render() {
    return(
        <div>
            <p>Signle Series - the show id will be {this.props.match.params.id} </p>
        </div>
        )
    }
};

export default SingleSeries;