'use client';

import { persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function PersistorProvider({ children }) {
    return <PersistGate persistor={persistor}>{children}</PersistGate>;
}
