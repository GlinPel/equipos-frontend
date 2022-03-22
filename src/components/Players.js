import React from 'react';
import ManagePlayers from './ManagePlayers';
import ManageStatus from './ManageStatus';
import { Link, Route, Switch } from 'react-router-dom';

const Players = () => {
  return (
    <div className="container mt-5">
        <div className="row mb-4">
            <div className="col-12 d-flex">
                <Link to="/players/list"><h2 className="m-1">Manage players</h2></Link>
                <h2 className="m-1"> | </h2>
                <Link to="/status/"><h2 className="m-1">Manage player status</h2></Link>
                
            </div>
        </div>
        <Switch>
            <Route path="/players">
                <ManagePlayers />
            </Route>
        </Switch>
        <Switch>
            <Route path="/status">
                <ManageStatus />
            </Route>
        </Switch>
    </div> 
  )
}

export default Players