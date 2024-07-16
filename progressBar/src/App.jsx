import './App.css'
import LoadingBar from './components/LoadingBar'
import ProgressBar from './components/ProgressBar'

function App() {

  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  return (
    <div className='container'>
      <LoadingBar/>
      <ProgressBar/>
      { elements.map(element => {
        return <div key={element} style={{
          margin: '10px',
          fontSize: '24px',
          fontWeight: '700',
        }}>CODE SNIPPET</div>
      })}
    </div>
  )
}

export default App
