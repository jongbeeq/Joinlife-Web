import styled from 'styled-components'
export function BoxButton({ children, fontSize, height, backgroundColor, color, fullWidth, onClick }) {

    const Button = styled.button`
    display: flex;
    flex-direction: column;
    ${fullWidth ? "width: inherit" : `width: calc(${fontSize}*10px)`};
    height: ${height}px;
    justify-content: center;
    align-items: center;    
    border-radius: calc(${height} * 0.2px);
    background: ${backgroundColor};
    color: ${color};
    font-size: ${fontSize}px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &:hover {
        color:  ${backgroundColor};
        background: ${color};
        transition: 0.1s;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    `


    return (
        <Button onClick={onClick}>{children}</Button>
    )
}

export function TextButton({ children, fontSize, color, onClick }) {
    const Button = styled.p`
        color: ${color};
        font-size: ${fontSize}px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    
    &:hover {
        text-decoration-line: underline;
        cursor: pointer;
    }
    `

    return <Button onClick={onClick}>{children}</Button>
}
