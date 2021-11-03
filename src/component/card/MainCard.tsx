import {Button, Card, Grid, Tab, Tabs, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {AccountBox,Contacts} from "@mui/icons-material";
import React, {useState} from "react";
import {ProfileCard} from "./ProfileCard";
import {MembersCard} from "./MembersCard";

const ProfileStatus = 0;
const AccountBookStatus = 1;

export const MainCard = ()=>{

    const [page, setPage] = useState(ProfileStatus);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setPage(newValue);
    };

    return <Card variant="outlined">
        <Grid container justifyContent="center">
            <Grid item>
                <Tabs value={page} onChange={handleChange}>
                    <Tab icon={<AccountBox />} label="自分のプロフィール" />
                    <Tab icon={<Contacts />} label="部員一覧" />
                </Tabs>
            </Grid>
        </Grid>
        <Grid container justifyContent="center">
            <Grid item>
                {
                    page === ProfileStatus ? <ProfileCard/> : <MembersCard/>
                }
            </Grid>
        </Grid>
    </Card>
}
