import styled from "styled-components"
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { useHistory } from "react-router-dom"
/* import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider"; */
import { useSetRecoilState } from "recoil";
import { UserState } from "../../store/Userstate";

export const Top = () => {

    const history = useHistory();
    /* const { setUserInfo } = useContext(UserContext); */
    const setUserInfo = useSetRecoilState(UserState);

    const onClickAdmin = () => {
        setUserInfo({isAdmin: true});
        history.push("/users");
    }
    const onClickUser = () => {
        setUserInfo({isAdmin: false});
        history.push("/users");
    }
    return (
        <SContainer>
            <h2>TOPページです。</h2>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
            <br />
            <br />
            <SecondaryButton onClick={onClickUser}>一般ユーザー</SecondaryButton>
        </SContainer>
    )   
}

const SContainer = styled.div`
    text-align: center;
`