import React from 'react';
import Square from './Square';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            onOff: 'ON',
            enabled: true,
        }

    }

    createSquare(index){
        return <Square dataIndex={index}/>
    }

    toggleOnOff = () => {
        this.setState ({
            onOff: this.state.onOff == 'OFF' ? 'ON' : 'OFF',
        });
    }

    setNewValue = (value) => {
        this.setState({
            enabled: value,
        })
    }

    render(){
        return (
            <div>
                <div>
                    {this.createSquare(1)}
                    {this.createSquare(2)}
                    {this.createSquare(3)}
                </div>
                <div>
                    {this.createSquare(4)}
                    {this.createSquare(5)}
                    {this.createSquare(6)}
                </div>
                <div>
                    {this.createSquare(7)}
                    {this.createSquare(8)}
                    {this.createSquare(9)}
                </div>

                <div className="mb-2"><button onClick={this.toggleOnOff} className="btn btn-primary">Toggle Button {this.state.onOff}</button> </div>
                <div><button onClick={() => this.setNewValue(!this.state.enabled)} className="btn btn-primary">Set New Value </button> </div>
                <div>{this.state.enabled.toString()}</div>
            </div> 
        );
    }
}

export default Board;