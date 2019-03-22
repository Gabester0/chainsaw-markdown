const output = (props, {cssTest}) => {

    return (
        <div>
            <div id='preview' className={cssTest} dangerouslySetInnerHTML={props.setMarkdown}>
            </div>
                <style jsx>{`
                #preview{
                    width: 800px;
                    margin: 50px auto;
                    border: 5px solid black;
                }
                `}</style>
        </div>
    )
}

export default output;