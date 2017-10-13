/**
 * Created by Rogier on 28/06/2017.
 */
import                           'cell-engine/requisites';
import { ReactHTMLElement } from 'react';
import                           'reflect-metadata';

import Application     from 'cell-engine/core/Application';
import CellManager     from 'cell-engine/core/CellManager';
import EventQueue      from 'cell-engine/core/EventQueue';
import SceneLoader     from 'cell-engine/core/SceneLoader';
import Store           from 'cell-engine/core/Store';
import SystemManager   from 'cell-engine/core/SystemManager';
import SystemRunner    from 'cell-engine/core/SystemRunner';

import * as Cells      from './cells';
import CellOrder       from './cells/order';
import * as Components from './components';
import * as Systems    from './systems';
import SystemOrder     from './systems/order';

import scn_main        from './scenes/main';

const game    = new Application({width: 800, height: 600, backgroundColor: 0xFFFFFF, parent: 'game'});
const events  = new EventQueue();
const cells   = new CellManager(Cells, CellOrder);
const store   = new Store(cells);
const scenes  = new SceneLoader(cells, Components, events);
const systems = new SystemManager(Systems, SystemOrder, cells, store, events);
const runner  = new SystemRunner(systems, cells, store);

game['loader']
    .add('img_clock', 'rsc/img/clock.png')
    .add('img_dial',  'rsc/img/dial.png')
    .once('complete', onLoaded)
    .load();

function onLoaded(loader)
{
    scenes.load(scn_main as ReactHTMLElement<any>, game.stage, loader, store);

    game.ticker.add(() =>
    {
        runner.update();
        events.clear();
    })
}
