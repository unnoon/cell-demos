import * as rad                  from 'bottom_line/math/rad';
import { TweenConfig, TweenMax } from 'gsap';

import System from 'cell-engine/systems/System';

const PI2 = 2 * Math.PI;

export default class Clock extends System
{
    public static cells = ['clock'];

    public update(clock)
    {
        let angle_dial1 = clock.hours % 12 / 12 * PI2;
        let angle_dial2 = clock.minutes    / 60 * PI2;

        const transform_dial1 = this.getChild('dial1', 'transform');
        const transform_dial2 = this.getChild('dial2', 'transform');

        if(!clock.tweenDuration)
        {
            transform_dial1.rotation = angle_dial1;
            transform_dial2.rotation = angle_dial2;
        }
        else if(clock.tweenStart)
        {
            angle_dial1 += angle_dial1 <= transform_dial1.rotation ? PI2 : 0;
            angle_dial2 += angle_dial2 <= transform_dial2.rotation ? PI2 : 0;

            clock.tweenStart = false;
            clock.tweening   = true;

            TweenMax.to(transform_dial1, clock.tweenDuration, {rotation: angle_dial1, onComplete: () => {transform_dial1.rotation = rad.normalize(transform_dial1.rotation); clock.tweening = false}} as TweenConfig);
            TweenMax.to(transform_dial2, clock.tweenDuration, {rotation: angle_dial2, onComplete: () => {transform_dial2.rotation = rad.normalize(transform_dial2.rotation); clock.tweening = false}} as TweenConfig);
        }
    }
}
