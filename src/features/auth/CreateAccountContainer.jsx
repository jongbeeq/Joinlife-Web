import { useState } from 'react';

import { BoxButton } from '../../components/Button';
import CreateAccountForm from './CreateAccountForm';
import themeColor from '../../variables/color';

export default function CreateAccountContainer() {
    const [isOpen, setIsOpen] = useState(false);
    const color = themeColor()

    const style = {
        // width: "500px"
    }

    return (
        <div style={style}>
            <BoxButton onClick={() => setIsOpen(true)} fullWidth={true} fontSize="19" height="50" backgroundColor={color.Black} color={color.White}>Create&nbsp;New&nbsp;Account</BoxButton>
            {isOpen && (<CreateAccountForm onClick={() => setIsOpen(false)} />)}
        </div>
    );
}