import React from 'react';
import { Switch, Route } from 'react-router-dom';


import MainPage from './Components/MainPage'
import MovieDetails from './Components/MovieDetails'


export default (
    <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/moviedetails/:id' component={MovieDetails} />
    </Switch>
)