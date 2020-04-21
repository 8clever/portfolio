import React from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import { Index } from "./Index"
import { Header } from "./Header"

export const Entry = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" render={() => <Index /> } />
                <Redirect to="/" />
            </Switch>
        </>
    )
}