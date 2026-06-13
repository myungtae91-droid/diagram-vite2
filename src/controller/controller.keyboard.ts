import { _MNGR, _METO } from '@/main'

export class ControllerKeyboard {
    constructor() {
        window.addEventListener('keyup', (e) => {

            // console.log(e.key, e.ctrlKey);
            switch(e.key) {
                case 'z':
                    if(e.ctrlKey) {
                        _METO.Undo();
                        _MNGR.render.Resize();
                    }
                    break;
                case 'y':
                    if(e.ctrlKey) {
                        _METO.Redo();
                        _MNGR.render.Resize();
                    }
                    break;
            }
        })
    }
}