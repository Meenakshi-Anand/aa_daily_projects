import React from 'react';

class Clock extends React.Component{
  constructor(){
    super();
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getYear();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    this.state = {
      date: date,
      month: month,
      year: year,
      hours: h ,
      minutes: m,
      seconds: s
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount(){
    setInterval(this.tick,1000);
  }

  tick(){
    this.state.seconds += 1 ;
    if(this.state.seconds === 60){
      this.state.minutes += 1 ;
      this.state.seconds = 0;
    }
    if(this.state.minutes === 60){
      this.state.hours += 1 ;
      this.state.minutes = 0;
    }
    this.setState({hours: this.state.hours, minutes: this.state.minutes, seconds: this.state.seconds});
  }
  render(){
    return (
      <section>
      <h1> Clock </h1>
      <div>
      <div>
      <h1>Date : </h1>
      <h1>{this.state.date.toString()}:{this.state.month.toString()}:{this.state.year.toString()}</h1>
      </div>
      <div>
      <h1>Time : </h1>
      <h1>{this.state.hours.toString()}:{this.state.minutes.toString()}:{this.state.seconds.toString()}</h1>
      </div>
      </div>
    </section>
    );
  }

}

export default Clock;
