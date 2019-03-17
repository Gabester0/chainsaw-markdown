import marked from 'marked';

function input(props){

    const htmlValue = `# Why React?\r
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
\`\`\`\r`;

    return (
        <div>
            <textarea
                id='editor'
                defaultValue={htmlValue}
                onChange={props.change}
             />
            <style jsx>
                {`
                    #editor {
                        width: 800px;
                        height: 200px;
                        margin: auto;
                    }
                `}
            </style>
        </div>
    )
}

export default input;