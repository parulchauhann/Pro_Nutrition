import './App.css'
import React, { Component } from 'react'
import FoodData from '../resources/FoodData'
import SearchData from './component/SearchData'
import FoodBox from './component/FoodBox'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: ""
    }
  }

  handleInput = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    return (
      <div>
        <SearchData handleInput={this.handleInput} />
        {
          FoodData.filter((val) => {
            if (this.state.searchInput === "") {
              return val;
            }
            else if (val.name.toLowerCase().includes(this.state.searchInput.toLowerCase())) {
              return val;
            }
          }).map((food) => {
            return (
              <div key={food.id} className="gap">
                <FoodBox food={food}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App
