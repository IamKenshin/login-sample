import React from 'react'
import {withRouter} from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passConfirm: '',
            touched: {
                email: false,
                password: false,
                passConfirm: false
            },
            errors: {
                emailError: false,
                passwordError: true,
                confirmError: false
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.finalValidationPass = this.finalValidationPass.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleChange = (field) => (event) => {
        if(field === 'passConfirm') {
            this.setState({
                touched: {...this.state.touched, ['passConfirm']: true},
                [field]: event.target.value
            })
            if(this.state.errors.confirmError) {
                this.setState({errors: {...this.state.errors, ["confirmError"]: false}})
            }
        } else {
            this.setState({[field]: event.target.value})
        }
    }

    validateEmail(event) {
        this.setState(
            {
                touched: {...this.state.touched, ['email']: true},
                email: event.target.value,
                errors: {...this.state.errors, ["emailError"]: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value) ? false: true}
            }
        )
    }

    validatePassword(event) {
        this.setState(
            {
                touched: {...this.state.touched, ['password']: true},                    
                password: event.target.value, 
                errors: {...this.state.errors, ["passwordError"]: (event.target.value.length < 5 || event.target.value.length > 20) ? true: false}
            }
        )
    }

    handleEnter(event) {
        if(event.key === 'Enter') {
            this.finalValidationPass();
        }
    }

    finalValidationPass() {
        this.setState({
            touched: {...this.state.touched, ['passConfirm']: true, ['password']: true, ['email']: true},            
            errors: {...this.state.errors, ["confirmError"]: (this.state.password !== this.state.passConfirm) ? true: false,
                ["emailError"]: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email) ? false: true,
                ["passwordError"]: (this.state.password.length < 5 || this.state.password.length > 20) ? true: false}
        }, () => {
            if(!(this.state.errors.confirmError || this.state.errors.emailError || this.state.errors.passwordError)) {
                this.props.history.push('/success')
            }
        })
    }

    render() {
        return (
            <div className={'container'}>
                <h1 className={'pageHeading'}>Register</h1>

                <div className={'regInput'}>
                    <label className={'inputLabel'}>First Name</label>
                    <input type="text" placeholder="First Name" onBlur={this.handleChange('firstName')}/>
                </div>
                
                <div className={'regInput'}>
                    <label className={'inputLabel'}>Last Name</label>
                    <input type="text" placeholder="Last Name" onBlur={this.handleChange('lastName')}/>
                </div>
                
                <div className={'regInput'}>
                    <label className={'inputLabel'}>Email*</label>
                    <input className={(this.state.touched.email && this.state.errors.emailError) ? 'error' : ''} 
                        type="email" placeholder="Email" onBlur={this.validateEmail}/>

                    <span className={(this.state.touched.email && this.state.errors.emailError) ? 'errorMsg' : 'hideError'}>An email must be in the format of 'john@joe.com'</span>
                </div>
                
                <div className={'regInput'}>
                    <label className={'inputLabel'}>Password*</label>
                    <input className={(this.state.touched.password && this.state.errors.passwordError) ? 'error' : ''} 
                        type="password" placeholder="Password" onBlur={this.validatePassword}/>     
                    
                    <span className={(this.state.touched.password && this.state.errors.passwordError) ? 'errorMsg' : 'hideError'}>Password must be between 5 and 20 characters</span>                
                </div>
                
                <div className={'regInput'}>
                    <label className={'inputLabel'}>Confirm Password*</label>
                <input className={(this.state.touched.passConfirm && this.state.errors.confirmError) ? 'error' : ''} 
                    type="password" placeholder="Confirm Password" onBlur={this.handleChange('passConfirm')}/>
                
                <span className={(this.state.touched.passConfirm && this.state.errors.confirmError) ? 'errorMsg' : 'hideError'}>Must match password</span>                
                </div>
                
                {/* <div tabIndex={0}  onKeyPress={this.handleEnter} className={'regInput'}>
                    <div className={'registerButton'} onClick={this.finalValidationPass}>Register</div>                     
                </div> */}

                <button className={'registerButton'} onClick={this.finalValidationPass}>Register</button>
                <div className={'requiredPrompt'}>
                    <span>Required Fields (*)</span>
                </div>
            </div>
        )
    }
}

export default Register