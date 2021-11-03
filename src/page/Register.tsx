import {Grid} from "@mui/material";
import React from "react";
import {RegisterCard} from "../component/card/RegisterCard";

export const Register = ()=>{
    return <div style={{height:"100vh",backgroundColor:"rgba(0,0,0,0)"}}>
        <Grid container style={{height:"100vh"}} justifyContent="center" alignContent="center">
            <Grid item>
                <RegisterCard/>
            </Grid>
        </Grid>
    </div>
}