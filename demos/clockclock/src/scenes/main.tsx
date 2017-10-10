/**
 * Created by Rogier on 29/06/2017.
 */

import * as React from 'react';

export default
<scene name='clockclock' c-clockclock_ui={{}}>
    <button name='Europe/Amsterdam' c-transform={{x: -150, y: -150, scaleX: 1.0,  scaleY: 1.0}}  c-on={{click: 'setLocation'}}>AMSTERDAM</button>
    <button name='Asia/Tokyo'       c-transform={{x:  150, y: -150, scaleX: 0.75, scaleY: 0.75}} c-on={{click: 'setLocation'}}>TOKYO</button>
    <button name='America/Havana'   c-transform={{x: -150, y:  150, scaleX: 0.75, scaleY: 0.75}} c-on={{click: 'setLocation'}}>HAVANA</button>
    <button name='Asia/Kathmandu'   c-transform={{x:  150, y:  150, scaleX: 0.75, scaleY: 0.75}} c-on={{click: 'setLocation'}}>KATHMANDU</button>
    <clockclock name='clockclock' c-clockclock={{location: 'Europe/Amsterdam'}}/>
</scene>
