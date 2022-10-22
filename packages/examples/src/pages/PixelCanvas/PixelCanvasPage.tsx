import { CanvasEditor } from './components/CanvasEditor';
import { CirclePicker } from 'react-color';
import { useState } from 'react';
import { EDITOR_CONFIG } from './config';

export const PixelCanvasPage = () => {
    const [selectedColor, setColor] = useState('#f44336');

    const changeColor = (color: any) => {
        setColor(color.hex);
    };

    return (
        <div>
            <h1>PixelCanvasPage</h1>
            <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
            <CanvasEditor selectedColor={selectedColor} width={EDITOR_CONFIG.size} height={EDITOR_CONFIG.size} />
        </div>
    );
};
