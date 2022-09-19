// state updates soudent occur in render. 
import React, { Component } from 'react'
import { arrLandAnimals, arrSeaAnimals, arrSkyAnimals } from '../db/data'

export default class ShowAnimals extends Component {

    constructor(props){
        super(props);
    }

    renderAnimalsList(){
      // The entire code here will run only when we have user choice in props. 
      if(this.props.animalTypeChoice){
      let myArr = this.props.animalTypeChoice == 'arrLandAnimals' ? arrLandAnimals :
                  this.props.animalTypeChoice == 'arrSeaAnimals' ? arrSeaAnimals :  
                  this.props.animalTypeChoice == 'arrSkyAnimals' ? arrSkyAnimals : null

      // take random values from an array:
      let randAnimals = myArr.sort(() => .5 - Math.random()).slice(0,this.props.animalsNum)
        
        return randAnimals
        .map((animal) => {
            return(
            <div className='row'>
            <div className="card" key={animal.id}>
            <img width={200} src={animal.img}  alt={animal.name}/>
            <div className="card-body">
              <h5 className="card-title">{animal.name}</h5>
              <p className="card-text">{animal.id}</p>
            </div>
          </div>
          </div>
          )})
      }
    }

  render() {
    return (

      <div className='container'>
        {this.renderAnimalsList()}
      </div>
    )
  }
}