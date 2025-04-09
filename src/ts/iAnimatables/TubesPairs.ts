import {iAnimatable} from "../types/iAnimatable";
import {TubePair} from "./TubePair";
import {settings} from "../settings";
import {Stoppable} from "Stoppable";
import {iGameStatus} from "../types/iGameStatus";
import {randomInt} from "../framework25/helpers/random";
import {iFrame} from "../framework25/types/iFrame";

export class TubesPairs extends Stoppable implements iAnimatable {
    public readonly tubePairs: TubePair[] = [];
    frameCounter = 0;
    maxFrameInterval = settings.tubesPair.maxFrameInterval.min;
    private canvas: HTMLCanvasElement;


    constructor(canvas:HTMLCanvasElement, sprite: CanvasImageSource, ctx: CanvasRenderingContext2D, frame: iFrame, rotation: number, status: iGameStatus) {
        super(sprite, ctx, frame, rotation, status);
        this.canvas = canvas;
        this.tubePairs.push(new TubePair(ctx, canvas, sprite))
    }

    update() {
        if (this.status.isStarted) {
            if (this.frameCounter++ >= this.maxFrameInterval) {
                if (this.tubePairs.length > settings.tubesPair.maxTubesPairs) {
                    this.tubePairs.shift();
                }
                this.tubePairs.push(new TubePair(this.ctx, this.canvas, this.sprite));
                this.maxFrameInterval = randomInt(settings.tubesPair.maxFrameInterval.min, settings.tubesPair.maxFrameInterval.max);
                this.frameCounter = 0;
            }
            this.tubePairs.forEach(tube => {
                tube.update();
            });
        }
    }

    draw() {
        this.tubePairs.forEach(tube => {
            tube.draw();
        });
    }


}