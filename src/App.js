import React, {Component} from 'react';
import {Tile} from './components';
import './app.css';

export default class App extends Component {
  state = {
    dataSet: 'animals',
    gridSize: [5, 5],
    tiles: []
  };

  componentDidMount() {
    this.initializeTiles();
  }

  changeDataSet = ({target}) => {
    this.setState({
      dataSet: target.value,
      tiles: []
    }, this.initializeTiles);
  };

  initializeTiles = () => {
    const {dataSet, gridSize} = this.state;
    const totalTiles = gridSize[0] * gridSize[1];
    const newTiles = [];

    for (let i = 0; i < totalTiles; i++) {
      newTiles.push(
        (<Tile dataSet={dataSet} key={`tile-${i}`} />)
      );
    }

    this.setState({tiles: newTiles});
  };

  render() {
    const {dataSet, tiles} = this.state;

    return (
      <div className="app">
        <div className="dataSet">
          Showing random selections from
          <div className="dataSetSelect">
            <select defaultValue={dataSet} onChange={this.changeDataSet}>
              <option value="animals">Animal Names</option>
              <option value="plants">Plant Families</option>
            </select>
          </div>
          .
        </div>
        <div className="tiles">
          {tiles}
        </div>
      </div>
    );
  }
}
