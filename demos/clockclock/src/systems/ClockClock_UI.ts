import System from 'cell-engine/systems/System';
import { TweenConfig, TweenMax } from 'gsap';

export default class ClockClock extends System
{
    public static cells = ['clockclock_ui'];

    public update(clockclock)
    {
        const eventSetLocation = this.events.get('setLocation');

        if(eventSetLocation)
        {
            const sender          = eventSetLocation.sender;
            const cmp_time        = this.getChild('clockclock', 'clockclock');
            const currentLocation = cmp_time.location;
            const newLocation     = this.store.get('node', sender).name;

            if(newLocation !== currentLocation)
            {
                cmp_time.location = newLocation;

                const currentButtonTransform = this.getChild(currentLocation, 'transform');
                const newButtonTransform     = this.getChild(newLocation,     'transform');

                const duration = 0.5;

                TweenMax.to(currentButtonTransform, duration, {scaleX: 0.75, scaleY: 0.75} as TweenConfig);
                TweenMax.to(newButtonTransform,     duration, {scaleX: 1.0,  scaleY: 1.0}  as TweenConfig);
            }
        }
    }
}
