import classNames from 'classnames';
import React from 'react';
import { Button } from '../button';
import { IconType } from '../icon';
import type { IThemeSwitchProps } from './theme-switch.api';
import { useColorTheme } from '/hooks';
import { ColorTheme } from '/types';

export const ThemeSwitch: React.FC<IThemeSwitchProps> = ({ className }) => {
    const { currentTheme, updateTheme } = useColorTheme();

    const handleThemeSwitchClick = () => {
        const newTheme = currentTheme === ColorTheme.DARK ? ColorTheme.LIGHT : ColorTheme.DARK;
        updateTheme(newTheme);
    };

    return (
        <Button
            className={classNames('theme-switch', className)}
            icon={currentTheme === ColorTheme.DARK ? IconType.SUN : IconType.MOON}
            variant="neutral-white"
            aria-label="switch color theme"
            onClick={handleThemeSwitchClick}
        />
    );
};
