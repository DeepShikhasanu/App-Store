import './index.css'

const TabItem = props => {
  const {tabItemDetails, setActiveTabId, isActive} = props
  const {displayText, tabId} = tabItemDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" className={tabBtnClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
