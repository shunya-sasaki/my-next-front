import {atom} from 'recoil';

export const stateViewMode = atom({
    key: 'viewModeState',
    default: 'Main'
})