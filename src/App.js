import { Component } from "react";
import axios from "axios"


class App extends Component {
    
  constructor(props){
    super(props)

  this.state = {
    data: []
  }

  }

  componentDidMount(){
    
      axios.get("https://api.github.com/repositories")
        .then( ( { data }) => {
        this.setState({ data })
      })

  }

  render(){
    const { data } = this.state
    console.log({data})
  return (
    <div className="App">
    
      <ul>
          Olá
          {data.map(item => 
            <li key={item.id}>{item.full_name}</li>
          )}

      </ul>
    </div>
  );
}
}

export default App;
