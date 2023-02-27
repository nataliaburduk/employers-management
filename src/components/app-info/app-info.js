import './app-info.css'

const AppInfo = ({totalEmpl, increasedEmpl}) => {
  return (
    <div className="app-info">
      <h1>Bakery Employees</h1>
      <h2>Total: {totalEmpl}</h2>
      <h2>Reward: {increasedEmpl}</h2>
    </div>
  )
}

export default AppInfo;