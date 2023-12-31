import { type HTMLAttributes } from 'react';
import { type IResponsiveAttribute } from '../../types';

export type TextTag = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export type TextSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'xl' | 'l' | 'm' | 's' | 'inherit';
export type TextFontWeight = 'light' | 'medium' | 'bold';

export interface ITextProps extends HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
    /**
     * Size of the text.
     * @default inherit
     */
    size?: TextSize;
    /**
     * Font weight of the text to override the one defined by the text size.
     */
    fontWeight?: TextFontWeight;
    /**
     * Responsive sizes for the text.
     */
    responsiveSize?: IResponsiveAttribute<TextSize>;
    /**
     * Tag to be used, defaults to the relative header tag for header sizes or to p.
     */
    tag?: TextTag;
    /**
     * Color of the text.
     * @default white
     */
    color?: 'white' | 'black' | 'primary' | 'muted' | 'success' | 'error' | 'warning';
    /**
     * Sets the success or muted color depending if the value is positive or negative when set overriding the color prop.
     */
    colorValue?: number;
    /**
     * Truncates the text when it overflows its container when set to true.
     */
    truncate?: boolean;
    /**
     * Custom class for the component.
     */
    className?: string;
}
