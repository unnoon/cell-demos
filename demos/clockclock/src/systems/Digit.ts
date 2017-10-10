import each from 'bottom_line/collections/each';
import find from 'bottom_line/collections/find';

import * as jsn_clockdata from '../../rsc/data/clock.json';

import System from 'cell-engine/systems/System';

export default class Digit extends System
{
    public static cells = ['digit'];

    public update(digit)
    {
        const clockdata = jsn_clockdata;

        const data = clockdata[digit.value];

        const tweenStart = !!find(data, (dials, i) => {const clock = this.getChild(`clock${i + 1}`, 'clock'); return clock.hours !== dials[0] || clock.minutes !== dials[1]});

        each(data, (dials, i) =>
        {
            const clock = this.getChild(`clock${i+1}`, 'clock');

            clock.hours         = dials[0];
            clock.minutes       = dials[1];
            clock.tweenDuration = digit.tweenDuration;
            clock.tweenStart    = tweenStart;
        });
    }
}
