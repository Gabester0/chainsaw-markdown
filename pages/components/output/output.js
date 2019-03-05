function output(props){


    return (
        <div id='preview'>
            {props.output}
            <style jsx>{`
                width: 800px;
                height: 300px;
                margin: 50px auto;
                border: 5px solid black;
            `}</style>
        </div>
    )
}


export default output;