// Write your code here
import './index.css'

const TabItem = props => {
  const {itemDetails, onChangeTabs, isSelected} = props
  const {tabId, displayText} = itemDetails

  const selectedTabClass = isSelected
    ? 'tab-item-button-selected'
    : 'tab-item-button-not-selected'

  const onChangeOfSelectedTabs = () => {
    onChangeTabs(tabId)
  }

  return (
    <li className="tab-item-list">
      <button
        type="button"
        onClick={onChangeOfSelectedTabs}
        className={selectedTabClass}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
