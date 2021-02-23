import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

export default function Step(props) {
    return (
        <Grid className='step' item xs={4}>
            <p className="number">{props.id}</p>
            <h3 className="step__title">{props.stepTitle}</h3>
            {
                props.componentName == 'input' ? 
                <TextField
                    className='step__input'
                    value={props.componentTitle}
                /> : 
                <Button className='step__button' variant="contained">
                    {props.componentTitle}
                </Button>
            }
        </Grid>
    )
}
