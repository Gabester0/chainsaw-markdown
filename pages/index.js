import React, { Component } from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';

import Output from '../components/output';
import markdown from '../components/markdown';

class Home extends Component{
    state = {
        key: "Markdown",
        input: "Markdown is a markup language that uses regular characters to style and format a document.  It is often used in documents such as .readme files to make them more visually appealing.\r\rTo see different examples of markdown effects you can use the dropdown menu to select which example you wish to see.  You can change the text in the input field to preview your own text and explore all the different combinations of effects you can achieve with markdown.\r\r*To read more about the history of markup languages and where the name comes from click [here](https://en.wikipedia.org/wiki/Markup_language).*"
    };

    componentDidMount(){
        //Remove space from url demonstration
        if( document.querySelector("a") ){
            const link = document.querySelector("a").textContent;
            const editedLink = link.split("").filter(e=> e!= " ").join("");
            document.querySelector("a").textContent = editedLink;
        }
    }

    changeListener(event) {
        this.setState({
            input: event
        });
    }

    getMarkdown = () =>{
        const markdown = marked(this.state.input, {sanitize: true, tables: true, breaks: true}, );
        return {__html: markdown};
    }

    handleSelect = (e)=>{
        const key = e.target.value
        const newInput = markdown[key];
        const cleanInput = DOMPurify.sanitize(newInput);
        this.setState({
            key: key,
            input: newInput
        });
        this.setState({input: cleanInput});
     };
    
    render() {
    
        const items = [];
        const keys = Object.keys(markdown);
        keys.forEach(key=> {
            items.push(<option key={markdown[key]}>{key}</option>) 
        });
        
        return (
            <div >
                <h1>Markdown Previewer</h1>
                    <div className="flexRow">
                        <h4><strong>INPUT:</strong></h4>
                        <select 
                        id="select"
                        onChange={e=> this.handleSelect(e)}>
                            {items}
                        </select>
                    </div>
                    <textarea
                        id="editor"
                        value={this.state.input}
                        onChange={e=> this.changeListener(e.target.value)}
                    />

                    <Output setMarkdown={this.getMarkdown()} />
                    <style jsx global>{`
                        .flexRow {
                            width: 822px;
                            display: flex;
                            flex-direction: row;
                            justify-content: start;
                            margin: 0 auto 12px auto;
                        }
                        .flexRow > h4 {
                            text-align: left;
                            display: inline;
                            margin: 4px 10px 4px 0;
                        }
                        .flexRow > select {
                            width: 100%;
                        }
                        textarea {
                            width: 800px;
                            height: 200px;
                            margin: auto;
                            padding: 10px;
                        }
                        div {
                            width: 800px;
                            margin: 0 auto;
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
                        }
                        td,
                        th {
                            border: 4px solid #343434;
                            padding: 5px;
                        }
                        code {
                            width: auto;
                            display: inline-block;
                            background: #343434;
                            color: white;
                            line-height:150%;
                            padding: 10px;
                        }
                        hr {
                            width: 97%;
                            margin-left: 0!important;
                        }
                        ul,
                        ol {
                            width: 95%;
                            margin: 25px 0;
                        }
                        p > img {
                            width: 200px;
                            height: auto;
                        }
                    `}</style>
            </div>
        );
    }
}

export default Home;