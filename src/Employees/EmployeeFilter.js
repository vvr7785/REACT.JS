import './EmployeeFilter.css'

const EmployeeFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control" >
                <label> Filter by WorkExperience :</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value=''>select work experience in yrs</option>
                    <option value='11'> 11 years</option>
                    <option value='10'> 10 years</option>
                    <option value='9'> 9 years</option>
                    <option value='8'> 8 years</option>
                    <option value='7'> 7 years</option>
                    <option value='6'> 6 years</option>
                    <option value='5'> 5 years</option>
                    <option value='4'> 4 years</option>
                    <option value='3'> 3 years</option>
                    <option value='2'> 2 years</option>
                    <option value='1'> 1 year</option>
                </select>
            </div>
        </div>
    )

}

export default EmployeeFilter;