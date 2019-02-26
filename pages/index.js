import React, { Component } from 'react';

import Input from './components/input/input';

let output = "Waiting for input";

class Home extends Component{
    
    state = {
        input: ''
    };

    componentDidMount(){
        const script = document.createElement("script");
        script.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';
        script.async = true;
        document.body.appendChild(script);
    }

    changeListener(event) {
        this.setState({
            input: event.target.value
        })
    }


   // submitTextHandler(){
   //     console.log(state.input)
   // }

    render() {

        let output = this.state.input;
        return (
            <div >
                <h1>Hallo with Next.js</h1>
                    <Input change={(event) => this.changeListener(event) } />
                    {/*<button onClick={this.submitTextHandler} >Add to </button>*/}
                    <div>{output}</div>
                    <style jsx>{`
                        div {
                            width: 800px;
                            margin: auto;
                            text-align: center;
                        }
                    `}</style>
            </div>
        );
    }
}

export default Home;