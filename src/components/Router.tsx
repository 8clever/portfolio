import React from "react";
import { Switch, Route, Redirect, Router as ReactRouter } from "react-router-dom"
import { createBrowserHistory } from "history";
import { Header } from "./Header"

// pages;
import { Index } from "../pages/Index"
import { DirtyClean } from "../pages/DirtyClean";

export const history = createBrowserHistory();

export const Router = () => {
	return (
		<ReactRouter history={history}>
			<Switch>
				<Route exact path="/">
					<Header />
					<Index />
				</Route>
				<Route exact path="/dirtyclean">
					<DirtyClean />
				</Route>
				<Redirect to="/" />
			</Switch>
		</ReactRouter>
	)
}