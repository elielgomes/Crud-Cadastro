

const SaveButton = (props) =>{

    return(
        <>
                <div
                 className="btn-green-tr"
                 type='button'
                 onClick={props.saveClick}
                 disabled={props.saveDisabled}
                 >success</div>
        </>
    )


}

export default SaveButton;