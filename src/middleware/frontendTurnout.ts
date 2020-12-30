export namespace FrontendTurnout {
    export interface LayoutDefinition {
        turnoutUId: string;
        SVGData: {
            x: number;
            y: number;
            rotate: number;
            dir: 'L' | 'P';
        };
    }
}
