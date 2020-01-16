import React from 'react';
import { makeStyles,
         withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import createServ from '../Services/TicketService';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#0288d1',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#0288d1',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#0288d199',
        },
        '&:hover fieldset': {
          borderColor: '#0288d1',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#0288d1',
        },
      },
    },
  })(TextField);

  

export default class TicketCreator extends React.Component {

    constructor(props) {
        super(props);
        this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
        this.errorHandeling = this.errorHandeling.bind(this);
        this.state = {
            textFieldValue: '',
            error: false,
            errorMSG: '',
        };
        //error = this.state.textFieldValue !== "a";
    }

    getInitialState() {
        return {
            textFieldValue: ''
        };
    }

    _handleTextFieldChange(e) {
        this.setState({
            textFieldValue: e.target.value
        });
    }
    
    render() {
        return (
            <div className='tickets'>
            <h1 className='title-ticket'>Get A Ticket</h1>
            <p className='body-ticket'>Tickets can only be redeemed with a <span className='mail-ticket'>@student.fontys.nl</span> email address</p>
            <FormControl noValidate autoComplete="off">
                <CssTextField value={this.state.textFieldValue} onChange={this._handleTextFieldChange} id="outlined-basic" label="E-Mail" variant="outlined" error={this.state.error} helperText={this.state.error ? this.state.errorMSG : ''}/>
                <div className="buttonContainer">
                <Button className="button" onClick={this.submitPurchase.bind(this)}>Get Ticket</Button>
                </div>
            </FormControl>
            </div>
        );
    }

    submitPurchase() {
        let serv = new createServ();
        if (/fontys.nl\s*$/.test(this.state.textFieldValue)) {
            serv.createTicket(this.state.textFieldValue, '3')
            .then((response) => {
            alert('Awesome your ticket should show up in your inbox any minute now');
            })
            .catch((err) => {
                this.errorHandeling(err.status)
            });
         }
         else{
             this.setState({
                error: true,
                errorMSG: 'Email does not end in @student.fontys.nl'
            });
         }
        
      }
    
    errorHandeling(errorCode){
        console.log('The code was: ' + errorCode)
        var message = 'Unknown error, try again';
        switch (errorCode) {
            case 409:
                message = 'This email has already registered a ticket';
              break;
            case 400:
                message = 'Not an email *check for spaces';
              break;
            default:
                message = 'Unknown error, try again';
          }
          console.log('The message was: ' + message)
          this.setState({
            error: true,
            errorMSG: message
        });
    }
}