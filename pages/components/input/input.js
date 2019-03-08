import marked from 'marked';

function input(props){

    const htmlValue = `
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
    `;

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
                    ol,
                    ul {
                        text-align: center;
                    }
                `}
            </style>
        </div>
    )
}

export default input;