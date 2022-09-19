import React, { Component } from 'react'
import ShowAnimals from './ShowAnimals'

export default class Zoo extends Component {

  constructor(props){
    super(props)
    this.state = {
     animalTypeChoice: '',
     animalsNum:3
    }
  }

  renderAnimalsArr(){
    let animalType = document.getElementsByName('animalType'); // NodeList(3)
    console.log(animalType)
    for (const x of animalType) 
      if(x.checked == true){
        this.setState({ animalTypeChoice: x.value })
        break;
      }  
    
    let animalsNum = document.getElementById('animalsNum').value;
    this.setState({animalsNum: animalsNum});
  }

  renderComponent(){
    return(
      <ShowAnimals on={true} animalTypeChoice={this.state.animalTypeChoice} animalsNum={this.state.animalsNum}/> 
    )
  }


  render() {

    return (
      <div className='container'>
        <h1>Welcome to the zoo</h1>
        <hr/>

        <div className='row'>
        <div className='col-6'>
        <h4>Select your favorite area</h4>

        <div className="input-group-text">
        <input type='radio' value='arrLandAnimals' name='animalType' className='form-check-input mt-0'/>
        <label>On land</label>
        </div>

        <div className="input-group-text">
        <input type='radio' value='arrSeaAnimals' name='animalType' className='form-check-input mt-0'/>
        <label>In the sea</label>
        </div>

        <div className="input-group-text">
        <input type='radio' value='arrSkyAnimals' name='animalType' className='form-check-input mt-0'/>
        <label>In the sky</label>
        </div>

        <h4>How many animals?</h4>
        <div className="input-group-text">
        <input type='number' id='animalsNum' className="form-control" />
        </div>

        <div className="input-group-text">
          <button onClick={()=>this.renderAnimalsArr()} className='btn btn-success'>Submit</button>
        </div>
        </div>
        <div className='col-6'>
        {this.renderComponent()}
        </div>
        </div>
      </div>
    )
  }
}