/**
 * Created by Rogier on 29/06/2017.
 */

import * as React from 'react';

export default
<digit c-digit={{tweenDuration: 2.0}}>
    <clock name='clock1' c-transform={{x: -25, y: -50}}/>
    <clock name='clock2' c-transform={{x:  25, y: -50}}/>
    <clock name='clock3' c-transform={{x: -25, y:   0}}/>
    <clock name='clock4' c-transform={{x:  25, y:   0}}/>
    <clock name='clock5' c-transform={{x: -25, y:  50}}/>
    <clock name='clock6' c-transform={{x:  25, y:  50}}/>
</digit>;
