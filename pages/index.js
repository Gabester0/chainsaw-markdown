import React, { Component } from 'react';
import marked from 'marked';

import Input from '../components/input';
import Output from '../components/output';
/*
Change this to have a select statement to choose which Element you want a demo of
When I select one this resets the input and the output

in input.js need to assign value with props.  Then can define value in index.js

Just create an event listener for the dropdown that will set state and input.js props value.  

Give "Markdown" in page header a tooltip with a brief explanation of what markdown is.  
*/
class Home extends Component{
    state = {
        input: `
**INPUT:**
&#x23; Single Hash at start of line creates H1
**OUTPUT:**
# Single Hash at start of line creates H1
        # One hashtag = H1\r

## Two hashtags = H2\r

### Three hashtags = H3\r

#### Four hashtags = H4\r

##### Five hashtags = H5\r

###### Six hashtags = H6\r




Wrap text in asterisks = *Italicized Text*\r

Wrap text in double asterisks = **Bold Text**\r




Three underscores or asterisks or dashes = \<hr\> (horizontal line)\r
*Note: the three underscores or asterisks or dashes must be the only characters on the line for this to work*

___
***
---




Wrap text in backticks = \` Text color and background color are switched \`\r

Wrap text in square brackets followed by url wrapped in parentheses = [[link] (url)](https://en.wikipedia.org/wiki/Hyperlink)\r
*Note: Don't put any space between the square brackets and the parentheses*\r

> Start line with one \> character = Indented blockquote

> > Start line with two \> characters = Double indented blockquote


---



1. Start each line with a number + a period + a space + Your text= Numbered List
3. Number + Period = &#50;. Your text
4. (&#52;.) You can use any number you want
4. (&#52;.) Markdown will still show the next number
10. (&#49;&#48;.) Markdown will still show the next sequential number

- Start each line with a dash plus a space = Bulleted list
- Start each line with a dash plus a space = Bulleted list
- Start each line with a dash plus a space = Bulleted list
- Start each line with a dash plus a space = Bulleted list



---



**INPUT:**

&#96; &#96; &#96; 
var code = function(){
> alert( "Wrap you code in a pair of triple \r backticks to create a multi-line code block" ); \r
> //To indent lines of code use tabs

};

code();
&#96; &#96; &#96;

**OUTPUT:**

\`\`\` 
var code = function(){
    alert( "Wrap you code in a pair of triple 
    backticks to create a multi-line code block" );
    //To indent lines of code use tabs
};

code();
\`\`\`



---



**INPUT:**

&#33;&#91; Description of the image &#93;&#40; the image URL &#41;

**OUTPUT:**

![React Logo w/ Text](https://goo.gl/Umyytc)



---



**INPUT:**

&#124; To Create &#124; A Table: &#124; Wrap Text &#124; In Pipe (or vertical slash) symbols &#124;
&#124; - &#124;- &#124; - &#124; - &#124;
&#124; On the 2nd line &#124; Type Pipe + Dash &#124; Once For Every &#124; Table Cell in the Row &#124;
&#124; For Every &#124; Row &#124;  Wrap Text &#124; In Pipes &#124;
&#124; If There Are Less Cells &#124; The Table Will Automatically &#124; Fill In Blank Cells &#124;

**OUTPUT:**

| To Create | A Table: | Wrap Text | In Pipe (or vertical slash) symbols |
|- | - | -| -|
| On the 2nd line | Type Pipe + Dash | Once For Every | Table Cell in the Row |
| For Every | Row |  Wrap Text | In Pipes |
| If There Are Less Cells | The Table Will Automatically | Fill In Blank Cells |




`};

    componentDidMount(){
        const script = document.createElement("script");
        script.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';
        script.async = true;
        document.body.appendChild(script);
        //Remove space from url demonstration
        const link = document.querySelector("a").textContent;
        const editedLink = link.split("").filter(e=> e!= " ").join("");
        document.querySelector("a").textContent = editedLink;
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
                        }
                        td,
                        th {
                            border: 4px solid #343434;
                            padding: 5px;
                        }
                        code {
                            width: 95%;
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