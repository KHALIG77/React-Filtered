import React from 'react'

const UserItem = (props) => {

   
  return (
    <div className='col-lg-3'>
        <div className="card">
  <img className="card-img-top" src={props.userData.image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.userData.title}</h5>
    <p className="card-text">{props.userData.price}AZN</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default UserItem