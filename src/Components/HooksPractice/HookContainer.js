import React, { useState } from 'react';
import Hook2 from './Hook2';

const HookContainer = () => {
   const [visible ,setVisible] = useState(true);
    return (
        <div>
            <button onClick={e=>setVisible(!visible)}>Toggle component</button>
            {visible && <Hook2/>}
        </div>
    );
};

export default HookContainer;