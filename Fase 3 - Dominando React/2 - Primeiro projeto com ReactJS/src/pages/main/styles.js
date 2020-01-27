import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
    margin-top: 30px;
    display: flex;

    input {
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submity',
    disabled: props.loading,
}))`
    background: #7159c1;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    /* rodar infinitamente
    svg {
        animation: ${rotate} 2s infinite;
    } */

    ${props =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 2s infinite;
            }
        `}

`;

export const List = styled.div`
    list-style: none;
    margin-top: 30px;
    margin-left: 10px;

    li {
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        /* Aplica somente nos li que tem um irmão a direita,
        Ou seja, acaba ignorando o primeiro li. Ex:
        li --> este será ignorado
        li
        li
        li
        */
        & + li {
            border-top: 1px solid #eee;
        }

        a {
            color: #7159c1;
            text-decoration: none;
        }
    }
`;
