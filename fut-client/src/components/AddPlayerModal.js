import React from 'react';

class AddPlayerModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            position: '',
            squadNumber: 0,
            loading: false
        }
    }

    render(){
        return(
            <>
            <div>
                <form>
                    <div>
                        <label>
                            First Name
                            <input type="text" name="firstName"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Last Name
                            <input type="text" name="lastName"/>
                        </label>
                    </div>
                </form>
            </div>
            </>
        )
    }
}