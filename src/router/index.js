import CacheRoute, { CacheSwitch } from "react-router-cache-route"
import MusicReview from "../containers/MusicReview/index-netapi"
import EnglishCorner from "../containers/EnglishCorner"
import NewsInfo from "../containers/NewsInfo"
import NewsDetail from "../containers/NewsInfo/Info"
import Detail from "../containers/Detail"

export default function Router() {
  return (
    <CacheSwitch>
      <CacheRoute path="/pages/2/detail/:id" component={Detail} />
      <CacheRoute path="/pages/2" component={EnglishCorner} />
      <CacheRoute path="/pages/3/info/:id" component={NewsDetail} />
      <CacheRoute path="/pages/3" component={NewsInfo} />
      <CacheRoute path="/:id?" component={MusicReview} />
    </CacheSwitch>
  )
}
