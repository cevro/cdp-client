import {LocoNetDefinition} from "@app/consts/interfaces";
import {signalTypes} from "@app/consts/signals/signalTypes";

export type SignalLight = 'HZ' | 'Z' | 'C' | 'B' | 'X' | 'DZ' | 'M';

export type SignalDefinition = LocoNetDefinition;

export interface SignalTypeDefinition extends SignalDefinition {
    name: string;
    type: number;
    construction?: 'T' | 'K';
    lights: SignalLight [];
    spec?: 'last-AB';
}

export interface SignalSchemeDefinition extends SignalTypeDefinition {
    SVGData: {
        rotate: number;
        x: number;
        y: number;
    };
}

export interface SignalBuffer {
    [key: string]: SignalTypeDefinition;
}

export const ABLights: SignalLight[] = ['HZ', 'Z', 'C'];

export const ABDef: { type: number; lights: SignalLight[]; } = {
    type: signalTypes.TYPE_AB,
    lights: ABLights,
};
