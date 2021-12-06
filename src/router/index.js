import { Route, Switch } from 'react-router-dom';
import React from 'react';
import MusicReview from '../containers/MusicReview';
import EnglishCorne from '../containers/EnglishCorner';
import NewsInfo from '../containers/NewsInfo';

export default function Router() {
    return (

        <Switch>
            <Route path="/pages/2" component={EnglishCorne} />
            <Route path="/pages/3" component={NewsInfo} />
            <Route path="/:id?" component={MusicReview} />
        </Switch>
        
    )
}
