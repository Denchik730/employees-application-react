import './app-info.css';

const AppInfo = ({employees, increasedEmployees}) => {

  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании D</h1>
      <h2>Общее число сотрудников: {employees}</h2>
      <h3>Премию получат: {increasedEmployees}</h3>
    </div>
  )
}

export default AppInfo;