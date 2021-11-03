import {AppBar, Button, Card, Grid, Hidden, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import {AccountBox} from "@mui/icons-material";
import {MainCard} from "../component/card/MainCard";

export const Main = ()=>{

    const isProfile = window.location.pathname === "/profile"

    return <div style={{marginBottom:30}}>
        <AppBar position="static">
            <Toolbar>
                電子計算機研究会 部員名簿
            </Toolbar>
        </AppBar>
        <div style={{marginTop:30}}>
            <Grid container justifyContent="center">
                <Grid item style={{width:"80%",maxWidth:1280}}>
                    <MainCard/>
                </Grid>
            </Grid>
        </div>
    </div>
}