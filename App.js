import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './navigation/StackNavigator';
import Intro from './screens/Intro';

export default function App() {
    const [isIntroduced, setIsIntroduced] = useState(false);

    if ( !isIntroduced ) {
        return <Intro onFinish={() => setIsIntroduced(true)} />;
    }
    else {
        return (
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        );
    }
}