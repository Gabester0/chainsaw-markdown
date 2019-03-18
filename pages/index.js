import React, { Component } from 'react';
import marked from 'marked';

import Input from './components/input/input';
import Output from './components/output/output';

class Home extends Component{
    state = {
        input: `# Why React?\r
## I certainly didn\'t need it\r
### for my 2-component 1-page program\r

### I just like React\r

I *wanted* to use it **obviously!**\r
___\r

\` body { background-color: white; } \`\r

[links](https://gabester.tech)\r

> Does this spark joy?\r

|   ha      |   hb      |  hc       |   hd      |
|---------- | --------- | --------- | ----------|
| tictictic | tactactac | tictictic | tactactac |
| toetoetoe | tictictic | toetoetoe | tactactac |

1. I\r
2. am\r
- a\r
- list\r

![React Logo w/ Text](https://goo.gl/Umyytc)\r

\`\`\`\r
//I am a\r
//multi-line\r
//code block\r
<div></div>\r
\`\`\`\r`
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
        const markdown = marked(this.state.input, {sanitize: true, tables: true, breaks: true}, );
        return {__html: markdown};
    }

    render() {

        return (
            <div >
                <h1>Markdown Previewer</h1>
                <h3>Built with Next.js and Marked.js</h3>
                    <Input change={(event) => this.changeListener(event) } />
                    <Output setMarkdown={this.getMarkdown()} />
                    <style jsx global>{`
                        div {
                            width: 800px;
                            margin: 75px auto;
                            border; 2px solid #343434;
                            text-align: center;
                            font-size: 16px;
                            font-family: 'Lato';
                        }
                        h1 {
                            font-size: 5em;
                            font-weight: 100;
                        }
                        h2 {
                            font-size: 4em;
                            font-weight: 200;
                        }
                        h3 {
                            font-size: 3em;
                            font-weight: 300;
                        }
                        table {
                            border-collapse: collapse;
                            margin: auto;
                        }
                        td,
                        th {
                            border: 4px solid #343434;
                            padding: 5px;
                        }
                        code {
                            display: inline-block;
                            background: #343434;
                            color: white;
                            line-height:150%;
                            padding: 10px;
                        }
                        ul,
                        ol {
                            width: 100px;
                            margin: 25px auto;
                        }
                    `}</style>
            </div>
        );
    }
}

export default Home;