import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class UserNav extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li className="inset">
              <Link to="/orders">Order History</Link>
            </li>
            <li className="inset">
              <Link to="/cart">View Cart</Link>
            </li>
            <li className="inset">
              <Link to="/plants">Start Shopping</Link>
            </li>
          </ul>
        </div>
        {this.props.isAdmin ? (
          <div>
            <span className="user-span">Admin</span>
            <ul>
              <li className="user-span">
                <Link to="/users">View All User Name and Emails</Link>
              </li>
              <li className="user-span">
                <Link to="/addplant">Add New Inventory</Link>
              </li>
              <li className="user-span">
                <Link to="/plants">Edit Plants</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    )
  }
}
