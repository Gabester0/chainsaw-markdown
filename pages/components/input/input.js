
//import * as styles from './input.css';

function input(props){

    const styles = {
        width: 400,
        height: 400,
        margin: 'auto',
    }

    return (
        <div className={styles}>
            <textarea value={props.input} onChange={props.change} />
            <style jsx>{`
                textarea {
                    width: 800px;
                    height: 300px;
                    margin: auto;
                } 
            `}</style>
        </div>
    )
}

export default input;