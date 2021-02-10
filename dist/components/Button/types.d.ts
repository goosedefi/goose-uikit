import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { SpaceProps } from "styled-system";
export declare const sizes: {
    readonly SM: "sm";
    readonly MD: "md";
};
export declare const variants: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly TERTIARY: "tertiary";
    readonly TEXT: "text";
    readonly DANGER: "danger";
    readonly SUBTLE: "subtle";
    readonly SUCCESS: "success";
};
export declare type Sizes = typeof sizes[keyof typeof sizes];
export declare type Variants = typeof variants[keyof typeof variants];
declare type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement> | LinkProps;
export declare type ButtonProps = {
    variant?: Variants;
    size?: Sizes;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    fullWidth?: boolean;
    as?: "a" | "button" | typeof Link;
    href?: string;
    external?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
} & ButtonTypes & SpaceProps;
export declare type ButtonThemeVariant = {
    background: string;
    backgroundActive: string;
    backgroundHover: string;
    border: string | number;
    borderColorHover: string;
    boxShadow: string;
    boxShadowActive: string;
    color: string;
};
export declare type ButtonTheme = {
    [key in Variants]: ButtonThemeVariant;
};
export {};
