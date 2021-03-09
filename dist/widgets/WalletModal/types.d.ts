import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";
export declare type ConnectorId = "authereum" | "fortmatic" | "frame" | "injected" | "portis" | "squarelink" | "torus" | "walletconnect" | "walletlink" | "bsc";
export declare type Login = (connectorId: ConnectorId) => void;
export interface Config {
    title: string;
    icon: FC<SvgProps>;
    connectorId: ConnectorId;
}
