import {iGameStatus} from "../types/iGameStatus";
import {FrameDrawer} from "../framework25/FrameDrawer";
import {iFrame} from "../framework25/types/iFrame";

export abstract class Stoppable extends FrameDrawer {
    protected status: iGameStatus;


    constructor(sprite: CanvasImageSource, ctx: CanvasRenderingContext2D, frame: iFrame, rotation: number, status: iGameStatus) {
        super(sprite, ctx, frame, rotation);
        this.status = status;
    }

}