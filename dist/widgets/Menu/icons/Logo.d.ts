import React from "react";
import { SvgProps } from "../../../components/Svg/types";
interface LogoProps extends SvgProps {
    isDark: boolean;
}
declare const Logo: React.FC<LogoProps>;
export default Logo;
