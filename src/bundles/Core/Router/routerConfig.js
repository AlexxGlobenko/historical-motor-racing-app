import { SCENE_KEYS } from '../constants';

import AllRacers from '../../AllRacers';
import MoreInfoAboutUser from '../../MoreInfoAboutUser';
import RacesShedule from '../../RacesShedule';

const config = {
  [SCENE_KEYS.AllRacers]: {
    screen: AllRacers,
  },
  [SCENE_KEYS.MoreInfoAboutUser]: {
    screen: MoreInfoAboutUser
  },
  [SCENE_KEYS.RacesShedule]: {
    screen: RacesShedule
  }
};

export default config;