export namespace FrontendSector {
    export interface LayoutDefinition {
        sectorUId: string;
        SVGData: {
            points: string[],
            label?: {
                x: number;
                y: number;
            };
        };
    }
}
