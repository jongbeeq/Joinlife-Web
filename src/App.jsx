import Route from "./router/Route"
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Route />
      <ToastContainer position="bottom-center" autoClose={3000} theme='dark' />
    </>
  )
}

export default App
