import React, { lazy, Suspense } from 'react';

const AnotherComponent = lazy(() => import('./AnotherComponent'));

const MyComponent = () => {
    return (
        <div>
            {/* <AnotherComponent /> */}
            <Suspense fallback={<div>Loading...</div>}>
                <AnotherComponent />
            </Suspense>
        </div>
    )
}

export default MyComponent;