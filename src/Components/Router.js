import React from 'react';
import {HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Detail from 'Routes/Detail';
import Search from 'Routes/Search';
import TV from 'Routes/TV';
import Home from 'Routes/Home';
import Header from "Components/Header";

function Router(){
    return(
        <HashRouter>
            <>
                <Header />
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/tv"  component={TV}/>
                    <Route path="/search"  component={Search}/>
                    <Route path="/movie/:id"  component={Detail} />
                    <Route path="/show/:id" component={Detail} />
                    <Redirect from="*" to="/" />
                </Switch>
            </>
        </HashRouter>
    )
}

export default Router;