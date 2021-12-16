import { Route, Switch } from "react-router-dom"
import React from "react"
import MusicReview from "../containers/MusicReview/index-netapi"
import EnglishCorner from "../containers/EnglishCorner"
import NewsInfo from "../containers/NewsInfo"
import Detail from "../containers/Detail"

export default function Router() {
  return (
    <Switch>
      <Route path="/pages/2" component={EnglishCorner} />
      <Route path="/pages/3" component={NewsInfo} />
      <Route path="/pages/detail/:id" component={Detail} />
      <Route path="/:id?" component={MusicReview} />
    </Switch>
  )
}
