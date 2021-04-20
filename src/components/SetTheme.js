import { useState } from 'react';

const SetTheme = () => {
    const [theme, setTheme] = useState('primary');

    return (
        <div>
            <button onClick={setTheme('primary')}>Primary</button>
            <button onClick={setTheme('3d-elements')}>3D Elements</button>
            <button onClick={setTheme('glassmorphism')}>Glassmorphism</button>
            <button onClick={setTheme('dark-mode')}>Dark-Mode</button>
            <button onClick={setTheme('colorless')}>Colorless</button>
            <button onClick={setTheme('bauhaus')}>Bauhaus</button>
            <button onClick={setTheme('on-white')}>Colors on White</button>
            <button onClick={setTheme('immersive')}>Immersive</button>
            <button onClick={setTheme('big-bold')}>Big Bold Typography</button>
        </div>
    )
}

export default SetTheme
