function SampleForm(){
    return(
        <form className="form">
            <label>First Name:</label>
            <input type="text" name="firstName"/>
            <label>Last Name:</label>
            <input type="text" name="lastName"/>
            <label>Age:</label>
            <input type="number" name="age"/>
        </form>
    )
}

export default SampleForm;

