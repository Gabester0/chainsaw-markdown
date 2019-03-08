import React, { Component } from 'react';
import marked from 'marked';

import Input from './components/input/input';
import Output from './components/output/output';


marked.setOptions({
    breaks: true,
    sanitize: true,
    tables: true
});
  

class Home extends Component{
    state = {
        input: `
        \r # Why React?
        \r ## I certainly didn\'t need it
        \r ### for my 2-component 1-page program
        
        \r ### I just like React
        
        \r I *wanted* to use it **obviously!**
        \r ___

        \r \` body { background-color: white; } \`
        
        \r [links](https://gabester.tech)
        
        \r > Does this spark joy?

        \r tictictic | tactactac | tictictic | tactactac
        \r --------- | --------- | --------- | ---------
        \r toetoetoe | tictictic | toetoetoe | tactactac

        \r 1. I am
        \r - a
        \r - list

        \r ![React Logo w/ Text](https://goo.gl/Umyytc)

        \r \`\`\`
        \r //I am a
        \r //multi-line
        \r //code block
        \r <div></div>
        \r \`\`\`
        `
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

    getMarkdown = () =>{
        const markdown = marked(this.state.input, {sanitize: true});
        return {__html: markdown};
    }

    render() {

        return (
            <div >
                <h1>Hallo with Next.js and Marked.js</h1>
                    <Input change={(event) => this.changeListener(event) } />
                    <Output setMarkdown={this.getMarkdown()} />
                    <style jsx>{`
                        div {
                            width: 800px;
                            margin: 75px auto;
                            border; 2px solid black;
                            text-align: center;
                        }
                    `}</style>
            </div>
        );
    }
}

export default Home;