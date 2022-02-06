import './assets/Loading.css'
import './App.css';
import React, { Component} from 'react';
import Navbar from './Components/Navbar'
import Coin from './Components/Coin'

class App extends Component {

  constructor() {
    super();

    this.state = {
      coins_data: [],
      current_page: 1,
      total_pages: 0,
      coins_per_page:15,
      coin_search:"",
      sorted_alpha:true,
      sorted_price:false,
      isLoading:true
    };

    this.searchCoin = this.searchCoin.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false"
    )
    .then(response => response.json())
    .then((data) => {
      this.setState({
        coins_data: data,
        total_pages: Math.ceil(data.length / this.state.coins_per_page)
      });
    });
  }
  
  searchCoin(event) {
    this.setState({ coin_search: event.target.value });
  }
  
  render() {

    let coins_search = this.state.coin_search
    let coin_arr = []
    
    if(coins_search.length === 0){
      coin_arr = this.state.coins_data.map((item , inx) => {
        return <Coin coin_prop = {item} key = {inx + 1} />
      })
    }
    else{
      coin_arr = this.state.coins_data.map((val , inx) => {
        if (val.name.toLowerCase().startsWith(coins_search.toLowerCase())) {
          // cnt++;
          return <Coin coin_prop={val} key={inx} />;
        }
        return null;
      })
    }

    if(this.state.coins_data.length === 0){
      return( 
        <div 
          className="Loading-cont"
          style = {{ backgroundColor: "black" }}
        >
          <div className="middle">
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
            <div className="bar bar4"></div>
            <div className="bar bar5"></div>
            <div className="bar bar6"></div>
            <div className="bar bar7"></div>
            <div className="bar bar8"></div>
          </div>
        </div>
        )
    }
    return (
      <div>
        <Navbar search = {this.searchCoin} />
        {/* <p>{this.state.coins_data[0].id}</p> */}
        <div className="coin-container">
          
          <div className="coin">
            <p>
              Coin
            </p>
          </div>
          <div className="Price">
            <p>
              Price
            </p>
          </div>
          <p>24h Max.</p>
          <p>24h Min.</p>
          <p>Price Chg.</p>
          <p>Mkt. cap</p>
        {/* <hr /> */}
        </div>
        {coin_arr}
      </div>
    )
  }
}

export default App;
