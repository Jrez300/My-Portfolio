import React from 'react'


const initialState = {
    fname: '',
    lname: '',
    pnumber: '',
    email: '',
    message:'',
    errorfname: '',
    errorlname: '',
    errorpnumber: '',
    erroremail: '',
    errormessage:''
};

class ValidationForm extends React.Component{
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]:isCheckbox
            ? event.target.checked
            : event.target.value
        });
    };

    validate = () => {
        let errorfname = '';
        let errorlname = '';
        let errorpnumber= '';
        let erroremail= '';
        let errormessage='';

        if (this.state.fname.length < 3) {
            errorfname = "Please Enter Valid First Name";
          }
        if (this.state.lname.length < 3) {
            errorlname = "Please Enter Valid Last Name";
          }
        if ( isNaN(this.state.pnumber)||this.state.pnumber.length !==10) {
            errorpnumber = "Please Enter Valid First Name";
          }
          
        if (this.state.email.indexOf('@') ||this.state.email.length < 6) {
            erroremail = "Please Enter Valid Email Address";
          }
        if (this.state.message.length <=30) {
            errormessage = "Please Enter More Than 30 Characters";
           
          }

          return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
          console.log(this.state);
          // clear form
          this.setState(initialState);
        }
};

render(){

return (
    
    <form class="contactform" onSubmit={this.handleSubmit}>

<label for="fname">First Name</label>
<input type="text" id="fname" name="fname" value={this.state.fname} onChange={this.handleChange}placeholder="Your name.."/>
<div style={{fontSize:12, color:"red"}}>
    {this.state.errorfname}
</div>

<label for="lname">Last Name</label>
<input type="text" id="lname" name="lname" value={this.state.lname} onChange={this.handleChange}placeholder="Your last name.."/>
<div style={{fontSize:12, color:"red"}}>
    {this.state.errorlname}
</div>

<label for="pnumber">Phone Number</label>
<input type="text" id="pnumber" name="pnumber" value={this.state.pnumber} onChange={this.handleChange}placeholder="Your phone number.."/>
<div style={{fontSize:12, color:"red"}}>
    {this.state.errorpnumber}
</div>


<label for="email">E-mail</label>
<input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange}placeholder="Your E-mail.."/>
<div style={{fontSize:12, color:"red"}}>
    {this.state.erroremail}
</div>


<label for="subject">Message us</label>
<textarea id="subject" name="message" value={this.state.message} onChange={this.handleChange}placeholder="Write something.." style={{height:'200px'}}></textarea>
<div style={{fontSize:12, color:"red"}}>
    {this.state.erromessage}
</div>

<div class="button">
    <input type="submit"/>
</div>

    </form>

)
}
}

export default ValidationForm