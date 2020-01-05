const output = (props, {cssTest}) => {

    return (
        <div id="output">
            <h4><strong>OUTPUT:</strong></h4>
            <div id='preview' className={cssTest} dangerouslySetInnerHTML={props.setMarkdown}>
            </div>
                <style jsx>{`
                #output > h4 {
                    text-align: left;
                    margin: 16px 0 16px 0;
                }
                #preview{
                    width: 750px;
                    margin: 0 auto 50px auto;
                    border: 5px solid black;
                    text-align: left;
                    padding: 25px;
                }
                `}</style>
        </div>
    )
}

export default output;