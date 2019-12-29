const output = (props, {cssTest}) => {

    return (
        <div>
            <div id='preview' className={cssTest} dangerouslySetInnerHTML={props.setMarkdown}>
            </div>
                <style jsx>{`
                #preview{
                    width: 750px;
                    margin: 50px auto;
                    border: 5px solid black;
                    text-align: left;
                    padding: 25px;
                }
                `}</style>
        </div>
    )
}

export default output;