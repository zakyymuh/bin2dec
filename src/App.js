import React,{Component} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Count/>
    </div>
  );
}
class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      result: 0,
      warning:false,
     }
  }
 
  render() { 
    const countBiner = () => {
      var binerLength = document.getElementById("inputan").value.length;
      var binerValue = document.getElementById("inputan").value;
      var patt = /^(\(?\+?[0-1]*\)?)?[0-1_\- \(\)]*$/g;
      var check = binerValue.match(patt);
      if(!check){
        this.setState({ warning:true});
        return false;
      }else{
        this.setState({ warning:false  });
      }
      var temp = 0;
      for(var i = binerLength-1; i >= 0; i--){
        if(binerValue[i] === "1"){
          temp = temp + (Math.pow(2,((binerLength-1)-i)));
        }
      }
      this.setState({result: temp});
    }
    return ( 
      <>
        <h1>Biner 2 Decimal</h1><br/>
        <span>Aplikasi pengubah biner menjadi desimal</span>
        <br/>
        <span 
              style={{'color':'red','display':(this.state.warning) ? 'block':'none'}}>
                Mohon hanya memasukan 1 dan 0
        </span>
        <input type="text" id="inputan"/>
        &nbsp;
        <button type="button" onClick={countBiner}>Hitung</button>
        <br/>
        <span>Hasil: {this.state.result}</span>
      </>
     );
  }
}
 
export default App;