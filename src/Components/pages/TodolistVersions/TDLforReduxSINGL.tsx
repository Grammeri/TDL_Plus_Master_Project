import React from 'react';

import {TodolistsForReduxSINGL} from "../../ComponentsForTDLVersions/TodolistsForReduxSINGL";


export type FilterValuesType = "All routines" | "In progress" | "Done";

export const TDLforReduxSINGL = () => {

    return (
        <div style={{display: 'flex'}}>
            <TodolistsForReduxSINGL
                title="What to learn"
            />

        </div>
    );
};
