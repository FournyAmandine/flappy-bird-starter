export const settings = {
    canvasID: "game",
    spriteURL: "src/img/sprite.png",
    birdie: {
        frames: [
            {
                sx: 6,
                sy: 982,
                sw: 35,
                sh: 25,
                dx: 72,
                dy: 200,
                dw: 35,
                dh: 25
            },
            {
                sx: 62,
                sy: 982,
                sw: 35,
                sh: 25,
                dx: 72,
                dy: 200,
                dw: 35,
                dh: 25
            },
            {
                sx: 118,
                sy: 982,
                sw: 35,
                sh: 25,
                dx: 72,
                dy: 200,
                dw: 35,
                dh: 25
            }
        ],
        maxFallSpeed: 10,
        gravity: .8,
        dxRatio: 0.25,
        maxFrameRate: 5,

    },
    background: {
        frame: {
            sx: 0,
            sy: 0,
            sw: 288,
            sh: 511,
            dx: 0,
            dy: 0,
            dw: 288,
            dh: 511
        }
    },
    ground: {
        frame: {
            sx: 584,
            sy: 0,
            sw: 336,
            sh: 112,
            dx: 0,
            dy: 0,
            dw: 336,
            dh: 112
        },
    },
    tubesPair: {
        gap : 80,
        tubesMinGap: -100,
        tubesMaxGap: 100,
        maxTubesPairs: 3,
        maxFrameInterval: {min: 80, max: 100},
        randomY: {min: -150, max: -30},
        horizontalGap: {min: 100, max: 200},
        sy: 645,
        sw: 55,
        sh: 325,
        dx: 200,
        dw: 55,
        dh: 325,
        top: {
            sx: 110,
            dy: -150,
        },
        bottom: {
            sx: 166,
            dy: 280,
        }
    },
    gravity: 0.2
}