import Switch from 'react-switch';
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { ContainerSwitch } from './style';

export const SwitchTheme = (props) =>{

  const {colors, title} = useContext(ThemeContext);

    return(
            <>
            <ContainerSwitch>
                <Switch
                onChange={props.toggleTheme}
                checked={title == 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={colors.primary}
                onColor={colors.primary}
                />
            </ContainerSwitch>
            
            </>

    )
}
