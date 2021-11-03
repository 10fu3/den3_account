import {Card, Typography} from "@mui/material";
import {TextEditor} from "./TextEditor";
import {useEffect, useState} from "react";
import {AvatarProfile} from "../profile/AvatarProfile";

export const ProfileCard = ()=>{

    const [icon, setIcon] = useState<string | null>(null);

    const [uploadedIcon,setUploadedIcon] = useState<string | null>(null);

    const [baseIcon, setBaseIcon] = useState<string>('');

    const [name, setName] = useState<string | null>(null);

    const [baseName, setBaseName] = useState<string>('');

    const [pass, setPass] = useState<string | null>(null);

    const [studentId, setStudentId] = useState<string | null>(null);

    const [baseStudentId, setBaseStudentId] = useState<string>('');

    const [nickName, setNickName] = useState<string | null>(null);

    const [baseNickName, setBaseNickName] = useState<string>('');

    useEffect(() => {
        const getProfile = async () => {
            // const profile = await Auth.getProfile();
            // if (profile.type === "success") {
            //     setBaseIcon(profile.value.avatar)
            //     setBaseName(profile.value.name)
            //     setBaseStudentId(profile.value.studentId)
            // }
        }
        getProfile()
    }, []);

    return <div>
        <Card variant="outlined" style={{width:"440px",margin:20,padding:20}}>
            <Typography variant="h5" style={{margin:5}}>
                基本情報
            </Typography>
            <AvatarProfile title="アイコン" baseIcon={baseIcon} icon={icon} setIcon={setIcon} setUploadedIcon={setUploadedIcon}/>

            <TextEditor id="nickname" title={"ニックネーム"} before={baseNickName} after={nickName} setBody={setNickName}/>
        </Card>
        <Card variant="outlined" style={{width:"440px",margin:20,padding:20}}>
            <Typography variant="h5" style={{margin:5}}>
                基本情報
            </Typography>

            <TextEditor id="student_id" title={"学籍番号"} before={baseStudentId} after={studentId} setBody={setStudentId}/>

            <TextEditor id="name" title={"名前"} before={baseName} after={name} setBody={setName}/>

            <TextEditor id="password" title={"パスワード"} before={""} after={pass} setBody={setPass}/>
        </Card>
    </div>
}