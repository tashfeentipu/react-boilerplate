import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import * as RouteNames from "./RouteNames";

interface IProps {

}

interface IState {

}

class RouteExport extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Routes>
                {/* <Route path={RouteNames.HomeScreen} element={<HomeScreen />} /> */}
            </Routes>
        );
    }
}

export default RouteExport;