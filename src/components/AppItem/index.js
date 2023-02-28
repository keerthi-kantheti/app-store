// Write your code here
import './index.css'

const AppItem = props => {
  const {itemDetails} = props
  const {appId, appName, imageUrl, category} = itemDetails
  return (
    <li className="app-item-list-item">
      <img src={imageUrl} alt={appName} className="app-item-image" />
      <p className="app-item-name">{appName}</p>
    </li>
  )
}
export default AppItem
