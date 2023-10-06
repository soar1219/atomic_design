import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
    const { children } = props;
    return (
        <>
            <SButton>{children}</SButton>
        </>
    )
}

/* 役割としてはどんな画面でもpropsを受け取ってラベルを生成できるようにする必要がある */

const SButton = styled(BaseButton)`
  background-color: #40514e;
  
`