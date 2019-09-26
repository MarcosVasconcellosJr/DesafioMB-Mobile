import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'

import Routes from './routes'
import storeConfig from './store/storeConfig'

const store = storeConfig()

export default function App() {
    return(
        <>
            <Provider store={store}>
                <StatusBar barStyle='light-content' backgroundColor='#5257f2' />
                <Routes />
            </Provider>
        </>
    )
}