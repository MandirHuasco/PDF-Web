import React from "react";

//----CSS----
import './App.css';

//----FUNCTIONS----
import {observer} from "mobx-react";
import StoreDatos from "./functions/Store";
import Conection from "./functions/Conection"
import Principal from "./principal";

class App extends React.Component{

  //----DATE RANGE----

  constructor(props) {
    super(props);
    this.state = {
      date: StoreDatos.a_c[0].e_t,
    }
  }

  //----DATE RANGE FIN----

  componentDidMount(){

    StoreDatos.c_a('c_k', true)

    Conection.a_n(StoreDatos.a_c[0].g_a, 'pr').then((a) => {
      console.log(a)

      Conection.a_q(1, 0, 0)

    }).catch((e) => {
      let COnline = localStorage.getItem('COnline')
      //console.log(COnline)

      if (COnline === null){
        StoreDatos.c_a('g_d', false)

      } else {
        StoreDatos.c_a('g_d', true)
        StoreDatos.b_b(JSON.parse(COnline).data)
        StoreDatos.increment(1)
      }
      console.log(e, 'Connection Error')
    })

    StoreDatos.a_c[0].g_b.onclose = (e) => {
      Conection.a_o(e, 'pr')
      StoreDatos.c_a('g_d', false)
    }

  }

  render () {

    return (
        <>
          <div className="App">
            <div className="Background"></div>
            <Principal/>
          </div>
        </>)
  }

}
export default observer(App);
