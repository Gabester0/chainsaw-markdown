const output = (props) => {

    return (
        <div>
            <div id='preview' dangerouslySetInnerHTML={props.setMarkdown}>
            </div>
                <style jsx>{`
                #preview{
                    width: 800px;
                    margin: 50px auto;
                    border: 5px solid black;
                }
                #preview {
                    border-collapse: collapse;
                }
                th,
                td {
                    border: 2px solid gray;
                    padding-left: 5px;
                    padding-right: 5px;
                }
                `}</style>
        </div>
    )
}

export default output;