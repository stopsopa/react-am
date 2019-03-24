
import Pos from './src/Pos';

import React from "react";

export default {
    '/pos' : {
        label: 'pos',
        component: Pos,
        exact: true,
    },
    '/else' : {
        label: 'else',
        render: () => <div>else ...</div>,
    },
}