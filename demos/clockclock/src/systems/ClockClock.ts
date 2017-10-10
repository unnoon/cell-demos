import * as location_time from 'spacetime';

import System from 'cell-engine/systems/System';

import stringify from 'bottom_line/integers/stringify';

export default class Time extends System
{
    public static cells = ['clockclock'];

    public update(time_state)
    {
        this.now(time_state);
    }

    public now(state)
    {
        const time = location_time.now();
        time.goto(state.location);
    
        const hours   = time.hours();
        const minutes = time.minutes();
        const seconds = time.seconds();
    
        if(hours   !== state.hours)   {this.setDoubleDigit(this.getChild('hours'),   hours)}
        if(minutes !== state.minutes) {this.setDoubleDigit(this.getChild('minutes'), minutes)}
        if(seconds !== state.seconds) {this.setDoubleDigit(this.getChild('seconds'), seconds)}
    
        if (hours !== state.hours || minutes !== state.minutes)
        {
            this.setSemicolon(this.getChild('semicolon1'), hours, minutes);
            this.setSemicolon(this.getChild('semicolon2'), hours, minutes);
        }
    
        state.hours   = hours;
        state.minutes = minutes;
        state.seconds = seconds;
    }

    public setDoubleDigit(eid_doubleDigit, number)
    {
        const eid_digit1 = this.store.get('node', eid_doubleDigit).children[0];
        const eid_digit2 = this.store.get('node', eid_doubleDigit).children[1];

        const dd = stringify(number, '00');

        const digit1 = this.store.get('digit', eid_digit1);
        const digit2 = this.store.get('digit', eid_digit2);

        digit1.value = dd[0];
        digit2.value = dd[1];
    }

    public setSemicolon(eid_semicolon, hours, minutes)
    {
        const clocks = this.store.get('node', eid_semicolon).children;

        const clock1 = this.store.get('clock', clocks[0]);
        const clock2 = this.store.get('clock', clocks[1]);

        clock1.hours = hours; clock1.minutes = minutes; clock1.tweenStart = true;
        clock2.hours = hours; clock2.minutes = minutes; clock2.tweenStart = true;
    }
}
