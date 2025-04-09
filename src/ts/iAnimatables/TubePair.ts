import {iAnimatable} from "../types/iAnimatable";
import {settings} from "../settings";
import {iObject} from "../framework25/types/iObject";
import {randomInt} from "../framework25/helpers/random";
import {FrameDrawer} from "../framework25/FrameDrawer";

export class TubePair extends FrameDrawer implements iAnimatable {
    public top: iObject;
    public bottom: iObject;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: CanvasImageSource) {
        super(sprite, ctx);
        this.top = {
            position: {x: canvas.width, y: randomInt(settings.tubesPair.randomY.min, settings.tubesPair.randomY.max)},
            width: settings.tubesPair.dw,
            height: settings.tubesPair.dh
        };
        this.bottom = {
            position: {x: canvas.width, y: this.top.position.y + settings.tubesPair.sh + settings.tubesPair.gap},
            width: settings.tubesPair.dw,
            height: settings.tubesPair.dh
        };
    }

    update() {
        this.top.position.x --;
        this.bottom.position.x --;
    }

}