import React, { Component } from 'react';

class Timer extends Component {

    // constructor(props){
    //     super(props);

    // }
    constructor(props){
        super(props);
        console.log("constructor")        // binding the functions
        this.start = this.start.bind(this);
        this.pause = this.pause.bind(this);
        this.stop = this.stop.bind(this);
    }
    state = { time: 0,Pstart:true,Ppause:false,Pstop:false }

    // componentWillMount(){
    //     console.log(" will Mount")         
    // }

    componentDidMount(){
        console.log("did Mount") ;
        this.start();
    }


    // shouldComponentUpdate(){
    //     console.log("should update")  
    //     return true;       
    // }


    // componentDidUpdate(){
    //     console.log("did Update")         
    // }
    
    // start(){
    //     console.log(this);
    //     console.log("start clicked")
    // }

    disable = (pstart,ppause,pstop)=>{
        this.setState({Pstart:pstart,Ppause:ppause,Pstop:pstop});
    }
    tick=()=>{
        // console.log('tick function');
        this.setState({time:this.state.time+1})
    }

    start = ()=>{
        // console.log("start clicked");
        this.Interval = setInterval(this.tick,1000);
        this.disable(true,false,false);

        console.log(this);

    }

    pause(){
        clearInterval(this.Interval);
        this.disable(false,true,true);
    }

    stop(){
        console.log(this);
        console.log("stop clicked")
    }

    render() {
        console.log("render");      
        return (
            <div className="container">
                <h3 className="text-center">Timer App</h3>
                <div className="card">
                <div className="card-header">
                    time is : {this.state.time} seconds
                </div>
                <div className="card-body">
                    <button className="m-1 btn btn-primary" onClick={this.start} disabled={this.state.Pstart}>start</button>
                    <button className="m-1 btn btn-warning" onClick={this.pause}  disabled={this.state.Ppause}>pause</button>
                    <button className="m-1 btn btn-danger" onClick={this.stop}  disabled={this.state.Pstop}>stop</button>
                </div>
                <div className="card-footer">
                    <p>Use these buttons to control the app.</p>
                </div>
            </div>
            </div>
            
        );
    }
}

export default Timer;