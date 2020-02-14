import React from "react";
import axios from 'axios'

export default class House extends React.Component {

  clickDelete = () => {
    axios
      .delete(`/api/houser/${this.props.data.house_id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    console.log(this.props.id);}

  render() {
    const { name, address, city, state, zipcode,key } = this.props.data;
    return (
      <div key={key}>
        <ul >
          <li>{name}</li>
          <li>{address}</li>
          <li>{city}</li>
          <li>{state}</li>
          <li>{zipcode}</li>
        </ul>
        <button onClick={this.clickDelete}>Delete</button>
      </div>
    );
  }
}
