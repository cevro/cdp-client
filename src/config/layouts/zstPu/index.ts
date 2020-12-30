import { LayoutDefinition } from 'app/config/layouts';
import { signals } from 'app/config/layouts/zstPu/signals';
import { sectors } from 'app/config/layouts/zstPu/sectors';
import { turnouts } from 'app/config/layouts/zstPu/turnouts';

export const layout: LayoutDefinition = {
    name: 'Púchov',
    id: 'pu',
    cards: {
        signals: true,
        sectors: true,
        ABSectors: true,
        points: true,
        routeBuilder: true,
        routes: true,
    },
    objects: {
        sectors: sectors,
        signals: signals,
        // @ts-ignore
        turnouts: turnouts,
        ABSectors: [],
        biDirAB: [],
    },
    viewBox: '-300 -90 2650 400',
};
