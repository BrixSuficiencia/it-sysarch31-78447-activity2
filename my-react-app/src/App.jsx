/* eslint-disable react/jsx-key */
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Student from "./Student.jsx"

function App() {
  const myArray = [<Student/>,<Student/>,<Student/>,<Student/>,<Student/>];

    return(
      <>
        <Header/>
        <div>
          <ul className="loop">
            {myArray.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <Footer/>
      </>
    )
}

export default App
