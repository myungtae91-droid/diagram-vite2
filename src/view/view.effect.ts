
import * as ViewType from './view.type'

export class ViewEffect {
    map = new Map<string, ViewType.EffectSquare>();
    constructor() {}

    Draw(ctx: CanvasRenderingContext2D): void  {
        for (const [key, item] of this.map) {
            // key 타입을 정해보자.
            // 점, 라인, 사각형(보더, 렉트)
            // *추가로 hover 인지 drag인지
            // 분류해서 나열해봐

            // 필요한 키
           
            switch(key) {
                case 'drag-border': {
                    const { x, y, w, h, color } = item;
                    this.DrawBorder(ctx, x, y, w, h, color);
                    break;
                }
                case 'drag-square': {
                    const { x, y, w, h, color } = item;
                    this.DrawSquare(ctx, x, y, w, h, color);
                    break;
                }
            }
        }
        this.map.clear();
    }

    AddBorder(x: number, y: number, w: number, h: number, color: string) {  
         this.map.set('drag-border', {x, y, w, h, color});  
    }
    AddSquare(x: number, y: number, w: number, h: number, color: string) {  
         this.map.set('drag-square', {x, y, w, h, color});  
    }

    DrawBorder(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string) {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.strokeRect(x, y, w, h);
        ctx.restore();
    }

    DrawSquare(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
        ctx.restore();
    }
}