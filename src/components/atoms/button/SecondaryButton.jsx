import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
    const { children } = props;
    return (
        <>
            <SButton>{children}</SButton>
        </>
    )
}

/* 役割としてはどんな画面でもpropsを受け取ってラベルを生成できるようにする必要がある */

const SButton = styled(BaseButton)`
  background-color: #11999e;
`