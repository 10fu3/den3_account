import React, {ChangeEvent, ChangeEventHandler, CSSProperties, useState} from "react";
import {
    Button,
    Card,
    CardContent, CardHeader, Grid,
    TextField, Typography
} from "@mui/material";
import {Password} from "../Password";

export const RegisterCard = ()=>{

    const cardStyle:CSSProperties = {
        width:396,
        textAlign:"center"
    }

    const [studentId,setStudentId] = useState("");
    const [pass,setPass] = useState("");
    const [invite,setInvite] = useState("");

    const [lastName,setLastName] = useState("");
    const [firstName,setFirstName] = useState("");
    const [nickName,setNickName] = useState("");

    const [errorMessage,setErrorMessage] = useState<string[]>([])

    const handleChangeMail = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setStudentId(e.target.value);
    }

    const checkForm = ()=>{
        let message:string[] = []
        if(studentId.length !== 7){
            message.push("学籍番号を入力してください")
        }
        if(pass.length < 8){
            message.push("パスワードを8文字以上入力してください")
        }
        if(invite.length === 0){
            message.push("招待コードを入力してください")
        }
        if(lastName.length === 0 || firstName.length === 0){
            message.push("名前を入力してください")
        }
        if(nickName.length === 0){
            message.push("ニックネームを入力してください")
        }
        return message;
    }

    const handleRegister = ()=>{

        const result = checkForm();

        setErrorMessage(result)
        
        console.log({
            student_id:studentId,
            password:pass,
            invite:invite,
            last_name:lastName,
            first_name:firstName,
            nick_name:nickName
        })
    }




    return <Card elevation={10} style={cardStyle}>
        <CardContent>
            <Typography style={{textAlign:"left",fontWeight:"bold"}} variant="h5">
                アカウント登録
            </Typography>
            <div style={{marginTop:10}}>
                <TextField onChange={handleChangeMail} placeholder="学籍番号" style={{width:"100%"}} size="small"/>
            </div>
            <div style={{marginTop:10}}>
                <Password set={setPass}/>
            </div>
            <div style={{marginTop:10}}>
                <TextField onChange={(e)=>{setInvite(e.target.value)}} placeholder="招待ID" style={{width:"100%"}} size="small"/>
            </div>
            <Grid container style={{marginTop:10}}>
                <Grid item style={{width:"calc(50% - 5px)",marginRight:10}}>
                    <TextField onChange={(e)=>{setLastName(e.target.value)}} placeholder="苗字" size="small"/>
                </Grid>
                <Grid item style={{width:"calc(50% - 5px)"}}>
                    <TextField onChange={(e)=>{setFirstName(e.target.value)}} placeholder="名前" size="small"/>
                </Grid>
            </Grid>
            <div style={{marginTop:10}}>
                <TextField onChange={(e)=>{setNickName(e.target.value)}} placeholder="ニックネーム" style={{width:"100%"}} size="small"/>
            </div>
            {
                errorMessage ? errorMessage.map(m=><p style={{color:"red"}}>{m}</p>) : <></>
            }
            <div style={{marginTop:10}}>
                <Button onClick={handleRegister} style={{width:"100%",backgroundColor:"#2bac0b",fontSize:20,fontWeight:"bold"}} variant="contained">
                    アカウント登録
                </Button>
            </div>
        </CardContent>
    </Card>
}