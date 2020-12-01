import React from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import { Index } from "./Index"
import { Header } from "./Header"
import { DirtyClean } from "./DirtyClean";

export const Entry = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Header />
                    <Index />
                </Route>
                <Route exact path="/dirtyclean">
                    <DirtyClean />
                </Route>
            </Switch>
        </>
    )
}