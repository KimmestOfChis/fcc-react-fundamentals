import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList'

class Series extends Component {

    state = {
        series: []
      }

      onSeriesInputChange = e => {
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then((response) => response.json())
        .then(json => this.setState({ series: json }))
      }

    render() {
        return(
            <div>
                <div>
                    <input type="text" onChange={this.onSeriesInputChange} />
                </div>
                <SeriesList list={this.state.series} />
            </div>
        )
    }
}

export default Series;
