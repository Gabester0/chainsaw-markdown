function input(props){

    return (
        <div>
            <textarea id='editor' value={props.input} onChange={props.change} />
            <style jsx>{`
                textarea {
                    width: 800px;
                    height: 200px;
                    margin: auto;
                } 
            `}</style>
        </div>
    )
}

export default input;