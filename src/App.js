import { Component } from "react";
import { listRepositorires } from "./API/github"
import Item from "./componentes/item"


class App extends Component {
    
  constructor(props){
    super(props)

  this.state = {
    data: []
  }

  }

  componentDidMount(){
    listRepositorires().then( data =>{
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
          {data.map(item => <Item key={item.id} {...item} />)}
          

      </ul>
    </div>
  );
}
}

export default App;
