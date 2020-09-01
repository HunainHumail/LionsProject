import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

function goBack() {
    _navigator.dispatch(
        NavigationActions.back()
    );
}

function replace(routeName, params) {
    _navigator.dispatch(
        StackActions.replace({
            routeName,
            params,
        })
        );
    }
    
    function reset_0(routeName) {
    _navigator.dispatch(
        StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName })]
        })
    );
}

export default {
    setTopLevelNavigator,
    navigate,
    replace,
    goBack,
    reset_0
};