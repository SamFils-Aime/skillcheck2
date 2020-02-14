import React from "react"
import {Link} from "react-router-dom"
import House from "./../House/House"
import axios from "axios"

export default class Dashboard extends React.Component{
constructor(props){
    super(props)
    this.state={
        data:[]
    }
}
componentDidMount() {
    axios
      .get("/api/houser")
      .then(res => this.setState({ data: res.data })
      )
      .catch(err => console.log(err));
  }

  
  render (){
      console.log(this.state.data)
      const {data}=this.state
      const mapEvents = data.map((state, index) => {
          
          return(
          <div>
              <House data={state}
              key={index}
              name={data.name}
              address={data.address}
              city={data.city}
              state={data.state}
              zipcode={data.zipcode}
              id={data.house_id}/>
          </div>
          )
      })
        return(
            <div>
                Dashboard
                <div>{mapEvents}</div>
                <Link to='/Stepone' style={{color: 'grey', textDecoration: 'none'}}>
                    <button>
                    Add New Property
                    </button>
                </Link>
            </div>
        )
}
}