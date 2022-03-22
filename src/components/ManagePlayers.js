import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import AddPlayer from './AddPlayer';
import List from './List';

const ManagePlayers = () => {
  return (
    <div className="row">
        <div className="col-12 mt-3 d-flex">
            <Link to="/players/list"><h2 className="m-1">List</h2></Link>
            <h2 className="m-1"> | </h2>
            <Link to="/players/addplayer"><h2 className="m-1">Add player</h2></Link>
        </div>
        <div className="col-12 mt-4">
            <Switch>
                <Route path="/players/list">
                    <List />
                </Route>
            </Switch>
            <Switch>
                <Route path="/players/addplayer">
                    <AddPlayer />
                </Route>
            </Switch>
        </div>
    </div>
  )
}

export default ManagePlayers