import React, { Component } from 'react';
import marked from 'marked';

import Input from './components/input/input';
import Output from './components/output/output';

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

    render() {

        return (
            <div >
                <h1>Hallo with Next.js</h1>
                    <Input change={(event) => this.changeListener(event) } />
                    <Output output={''}>
                    {marked(this.state.input)}
                    </Output>
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