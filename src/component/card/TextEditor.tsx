import {Box, Button, Divider, Grid, TextField, Typography} from "@mui/material";
import {Dispatch, SetStateAction, useState} from "react";
import {EmptyCardItem} from "./EmptyCardItem";

export const TextEditor: React.FC<{ id: string, title: string, before: string, after: string | null, setBody: Dispatch<SetStateAction<string | null>>}> = (props) => {

    const [open, setOpen] = useState(false)

    // const changeHandle = ()=>{
    //     const send = async()=>{
    //         if(props.after == null){
    //             return
    //         }
    //         const data :{ [index: string]: string; } = {};
    //         data[props.id] = props.after;
    //
    //         const result = await Auth.updateAccount(data);
    //
    //         alert(result ? "成功しました":"エラーが発生しました")
    //     }
    //     send()
    // }

    const Editor = open ? <div style={{marginTop: "10px", marginLeft: "10px"}}>
        <Grid container>
            <Grid item style={{width: "calc(100% - 84px)"}}>
                <TextField size={"small"} variant={"outlined"} style={{width: "calc(100%)"}} onChange={(e) => {
                    props.setBody(e.target.value)
                }}/>
            </Grid>
            <Grid item>
                <Button style={{
                    marginLeft: "10px",
                    width: "74px",
                    height:"40px",
                    color: "#5cad00",
                    borderColor: "#5cad00"
                }} variant="outlined"
                    // onClick={changeHandle}
                >変更</Button>
            </Grid>
        </Grid>
    </div> : <div/>

    return <EmptyCardItem title={props.title}>
        <Box mt={1}>
            <Grid container>
                <div style={{marginTop: 12, marginLeft: 10}}>
                    {props.before}
                </div>
                <Button style={{
                    marginLeft: "auto",
                    color: "#0068ad",
                    borderColor: "#0068ad"
                }} variant="outlined" onClick={() => {
                    setOpen(!open)
                }}>
                    {!open ? "編集" : "閉じる"}
                </Button>
            </Grid>
            {Editor}
        </Box>
    </EmptyCardItem>
}
