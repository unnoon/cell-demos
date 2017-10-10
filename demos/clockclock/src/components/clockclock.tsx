/**
 * Created by Rogier on 29/06/2017.
 */
import * as React from 'react';

export default
// clockclock is a reserved tag
<clockclock c-clockclock={{}}>
    <double_digit name='hours'      c-transform={{x: -300}}/>
    <semicolon    name='semicolon1' c-transform={{x: -150}}/>
    <double_digit name='minutes'    c-transform={{x:    0}}/>
    <semicolon    name='semicolon2' c-transform={{x:  150}}/>
    <double_digit name='seconds'    c-transform={{x:  300}}>
        <digit name='digit1' c-digit={{tweenDuration: 0.5}}/>
        <digit name='digit2' c-digit={{tweenDuration: 0.5}}/>
    </double_digit>
</clockclock>;
