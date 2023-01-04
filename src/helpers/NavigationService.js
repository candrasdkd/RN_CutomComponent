

import { CommonActions, createNavigationContainerRef, StackActions } from '@react-navigation/native';

const navigationRef = createNavigationContainerRef()
function navigate(routeName, params) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(routeName, params);
    }
}

function back() {
    if (navigationRef.isReady()) {
        navigationRef.goBack()
    }
}

function replace(...args) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.replace(...args));
    }
}

function push(...args) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.push(...args));
    }
}

function reset(...args) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.reset(...args));
    }
}

export default {
    navigate,
    back,
    replace,
    push,
    reset,
    navigationRef
};