import {configureStore} from '@reduxjs/toolkit';
import notifications from '../redux/actions/notifications';

export const createTestStore = (preloadedState) => {
    return configureStore({
        reducer: notifications,
        preloadedState
    })
}