import './app-info.css'

const AppInfo = ({totalEmpl, increasedEmpl}) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании Nut's Bakery</h1>
      <h2>Общее число сотрудников: {totalEmpl}</h2>
      <h2>Премию получат: {increasedEmpl}</h2>
    </div>
  )
}

export default AppInfo;