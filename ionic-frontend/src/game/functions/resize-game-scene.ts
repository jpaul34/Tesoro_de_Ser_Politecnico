import { gameConfig } from 'src/game/configurations/game-config';

export function ResizeGameScene(component) {

    return () => {
        const canvas = document.querySelector('canvas');
        if (canvas) {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const wratio = width / height;
            const ratio = gameConfig.width / gameConfig.height;
            if (wratio < ratio) {
                canvas.style.width = width + 'px';
                canvas.style.height = (width / ratio) + 'px';
            } else {
                canvas.style.width = (height * ratio) + 'px';
                canvas.style.height = height + 'px';
            }
            component.top = (height - Number((canvas.style.height).replace('px', ''))) / 2;        
        };

    };
}
