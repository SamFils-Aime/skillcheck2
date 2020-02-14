import React from "react"
import {Link} from "react-router-dom"
// import axios from 'axios'



export default class Wizard extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             name: '', 
//             address: '', 
//             city: '', 
//             state: '', 
//             zipcode: 0
//         }
//     }

// handlechange = (e)=>{
//     this.setState({
//         [e.target.name]: e.target.value
//       });
// }
// add_house = () => {
//     axios
//       .post('/api/houser', this.state)
//       .then(res => console.log(res))
//       .catch(err => console.log(err));
//   };

    render (){
        // console.log(this.state)
        return(
            <div>
                Wizard
                <Link to='/' style={{color: 'grey', textDecoration: 'none'}}>
                    <button>
                    Cancel
                    </button>
                </Link>
       
      
                <Link to="/stepone">
                <button>
                    next page
                </button>
                </Link>
                {/* <input name="name" onChange= {this.handlechange} placeholder="name"></input>
                <input name="address" onChange= {this.handlechange} placeholder="address"></input>
                <input name="city" onChange= {this.handlechange} placeholder="city"></input>
                <input name="state" onChange= {this.handlechange} placeholder="state"></input>
                <input name="zipcode" onChange= {this.handlechange} placeholder="zipcode"></input>
                <Link to='/'>
                <button onClick={this.add_house}>add new house</button>
                </Link> */}
            </div>
        )
}
}