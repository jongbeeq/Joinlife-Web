import styled from 'styled-components'
import themeColor from '../colors/color'

export function JoinlifeLogo({ fontSize = "57px" }) {

    const color = themeColor()

    const Logo = styled.div`
    color: ${color.Orange};
    font-size: ${fontSize};
    font-style: normal;
    font-weight: 400;
    lineeight: normal;
    `

    return (
        <Logo>JoinLife</Logo>
    )
}
