import {Grid} from "@mui/material";
import {LoginCard} from "../component/card/LoginCard";
import React from "react";

export const Login = ()=>{
    return <div style={{height:"100vh",backgroundColor:"rgba(0,0,0,0)"}}>
        <Grid container style={{height:"100vh"}} justifyContent="center" alignContent="center">
            <Grid item>
                <LoginCard/>
            </Grid>
        </Grid>
    </div>
}