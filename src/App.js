import { Component } from "react";


class App extends Component {
    
  constructor(props){
    super(props)

  this.state = {
    data: []
  }

  }

  componentDidMount(){
    
      axios.get("https://api.github.com/repositories")
        .then( ({ data }) => {
        this.setState = ({ data })
      })

  }


  render(){
    var { data } = this.state
  return (
    <div className="App">
      <ul>

          {data.map(nome => {
            <li>{nome.full_name}</li>
          })}

      </ul>
    </div>
  );
}
}

export default App;
