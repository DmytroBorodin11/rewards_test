import React from 'react';
import '../css/StepBlock.css';
import { Grid } from '@material-ui/core';
import Step from './Step';

export default function StepsBlock(props) {

    let steps = [
        {
            id: 1,
            componentName: 'input',
            stepTitle: 'Enter your business name',
            componentTitle: 'Business name',
        },
        {
            id: 2,
            componentName: 'button',
            stepTitle: 'Start rewarding your customers',
            componentTitle: 'create template',
        },
        {
            id: 3,
            componentName: 'button',
            stepTitle: 'Final step',
            componentTitle: 'start now',
        },

    ]

    let stepsComponents = steps.map(step => <Step key={step.id} id={step.id} stepTitle={step.stepTitle} 
        componentTitle={step.componentTitle} componentName={step.componentName}/>)

    return (
        <div className='step__block'>
            <div className="wrap">
                <h2 className="steps__title">
                    Simple as:
                </h2>
                <Grid container xs={12} className='steps__container' direction="row">
                    {stepsComponents}
                </Grid>
            </div>
        </div>
    )
}
