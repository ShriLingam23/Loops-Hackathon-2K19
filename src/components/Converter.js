import React,{Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import currency from '../currency.png';

class Converter extends Component{

    constructor(props) {
        super(props);
    
        this.onCalculate = this.onCalculate.bind(this);
        this.onValueChange = this.onValueChange.bind(this);

        this.onClickInDropdown = this.onClickInDropdown.bind(this);
        this.onClickOutDropdown = this.onClickOutDropdown.bind(this);

        this.toggleIn = this.toggleIn.bind(this);
        this.toggleOut = this.toggleOut.bind(this);
        this.state = {
          dropdownOpenIn: false,
          dropdownOpenOut: false,
          inputCurrency:'',
          outputCurrency:'',
          inAmount:0.0,
          outAmount:0.0,
          currencyRate:[]
        };
    }

    toggleIn() {
        this.setState(prevState => ({
          dropdownOpenIn: !prevState.dropdownOpenIn
        }));
    }

    toggleOut() {
        this.setState(prevState => ({
          dropdownOpenOut: !prevState.dropdownOpenOut
        }));
    }

    onClickInDropdown(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onClickOutDropdown(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onValueChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    async onCalculate(e){
        e.preventDefault();

        await fetch('https://www.apilayer.net/api/live?access_key=ad22bd4f0a8c094965e4433ad875e948&currencies=AUD,EUR,GBP,LKR')
        .then(res => res.json())
        .then(data => this.setState({currencyRate:data.quotes}));

        console.log(this.state.currencyRate);

        var CurrencyIn = this.state.inputCurrency;
        var CurrencyOut = this.state.outputCurrency;

        let ConvertedUnitPrice_In = this.state.inAmount;
        let ConvertedUnitPrice_Out = this.state.outAmount;

        let USDLKR = this.state.currencyRate['USDLKR'];
        let USDGBP = this.state.currencyRate['USDGBP'];
        let USDEUR = this.state.currencyRate['USDEUR'];
        let USDAUD = this.state.currencyRate['USDAUD']; 

        if(" SriLankan Rupees"===CurrencyIn) {
			
			switch(CurrencyOut) {
				case " SriLankan Rupees":
                    ConvertedUnitPrice_Out=ConvertedUnitPrice_In;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
					break;
					
				case " US Dollars":
                    ConvertedUnitPrice_Out=ConvertedUnitPrice_In/USDLKR;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
					break;
					
				case " Great Britain Pounds":
                    ConvertedUnitPrice_Out=(ConvertedUnitPrice_In/USDLKR)*USDGBP;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
					break;
					
				case " Euro":
                    ConvertedUnitPrice_Out=(ConvertedUnitPrice_In/USDLKR)*USDEUR;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
					break;
				
                case " Australian Dollars":
                    ConvertedUnitPrice_Out=(ConvertedUnitPrice_In/USDLKR)*USDAUD;   
                    this.setState({outAmount:ConvertedUnitPrice_Out});
                    break;
	
			}
		}
		
		else if(" US Dollars"===CurrencyIn) {
			
			switch(CurrencyOut) {
                case " SriLankan Rupees":
                    ConvertedUnitPrice_Out=ConvertedUnitPrice_In*USDLKR;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
                    break;
					
				case " US Dollars":
                    ConvertedUnitPrice_Out=ConvertedUnitPrice_In;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
					break;
					
                case " Great Britain Pounds":
                    ConvertedUnitPrice_Out=ConvertedUnitPrice_In*USDGBP;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
                    break;
					
                case " Euro":
                    ConvertedUnitPrice_Out=ConvertedUnitPrice_In*USDEUR;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
                    break;
				
                case " Australian Dollars":
                    ConvertedUnitPrice_Out=ConvertedUnitPrice_In*USDAUD;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
                    break;
	
			}
		}
		
		else if(" Great Britain Pounds"===CurrencyIn) {
			
			switch(CurrencyOut) {
                case " SriLankan Rupees":
                    ConvertedUnitPrice_Out=(ConvertedUnitPrice_In/USDGBP)*USDLKR;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
                    break;
					
                case " US Dollars":
                    ConvertedUnitPrice_Out=(ConvertedUnitPrice_In/USDGBP);
                    this.setState({outAmount:ConvertedUnitPrice_Out});
                    break;
					
                case " Great Britain Pounds":
                    ConvertedUnitPrice_Out=ConvertedUnitPrice_In;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
					break;
					
                case " Euro":
                    ConvertedUnitPrice_Out=(ConvertedUnitPrice_In/USDGBP)*USDEUR;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
                    break;
				
                case " Australian Dollars":
                    ConvertedUnitPrice_Out=(ConvertedUnitPrice_In/USDGBP)*USDEUR;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
                    break;
	
			}
		}
		
		else if(" Euro"===CurrencyIn) {
			
			switch(CurrencyOut) {
                case " SriLankan Rupees":
                    ConvertedUnitPrice_Out=(ConvertedUnitPrice_In/USDEUR)*USDLKR;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
                    break;
					
                case " US Dollars":
                    ConvertedUnitPrice_Out=ConvertedUnitPrice_In/USDEUR;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
                    break;
					
                case " Great Britain Pounds":
                    ConvertedUnitPrice_Out=(ConvertedUnitPrice_In/USDEUR)*USDGBP;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
                    break;
					
                case " Euro":
                    ConvertedUnitPrice_Out=ConvertedUnitPrice_In;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
                    break;
				
                case " Australian Dollars":
                    ConvertedUnitPrice_Out=(ConvertedUnitPrice_In/USDEUR)*USDAUD;
                    this.setState({outAmount:ConvertedUnitPrice_Out});
                    break;
	
			}
		}

    }
    

    render() {
        return (
          <div className="container" style={{paddingTop:'50px'}}>
    
            <div className="card" style={{textAlign:'center'}}>
                <h5 className="card-header">Real Time Currency Converter</h5>
                <img src={currency} width="500" height="500" alt="CodingTheSmartWay.com" style={{alignSelf:'center'}} />
                <div className="card-body">
                    <h5 className="card-title">Input the Values</h5>

                    {/* 1st Row */}
                    <div className="row" style={{margin:'10px'}}>
                        <div className="col-5">
                            <p className="card-text">Select the Input Currency Unit</p>
                        </div>

                        <div className="col-7">

                            <div className="input-group mb-3">
                                <div className="input-group-prepend" >
                                    <span className="input-group-text">$</span>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        aria-label="Amount (to the nearest dollar)" 
                                        value={this.state.inputCurrency} 
                                        onChange={this.onClickInDropdown}
                                    />
                                </div>
                                <Dropdown isOpen={this.state.dropdownOpenIn} toggle={this.toggleIn}>
                                    <DropdownToggle caret>
                                        Input Currency
                                    </DropdownToggle> 
                                    <DropdownMenu>
                                        <DropdownItem onClick={this.onClickInDropdown} name='inputCurrency' value=' SriLankan Rupees'> SriLankan Rupees</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.onClickInDropdown} name='inputCurrency' value=' US Dollars'> US Dollars</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.onClickInDropdown} name='inputCurrency' value=' Great Britain Pounds'> Great Britain Pounds</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.onClickInDropdown} name='inputCurrency' value=' Euro'> Euro</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.onClickInDropdown} name='inputCurrency' value=' Australian Dollars'>Australian Dollars</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>

                    {/* 2nd Row */}
                    <div className="row" style={{margin:'10px'}}>

                        <div className="col-5">
                            <p className="card-text">Select the Output Currency Unit</p>
                        </div>

                        <div className="col-7">

                            <div className="input-group mb-3">
                                <div className="input-group-prepend" >
                                    <span className="input-group-text">$</span>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        aria-label="Amount (to the nearest dollar)" 
                                        value={this.state.outputCurrency} 
                                        onChange={this.onClickOutDropdown}
                                    />
                                </div>
                                <Dropdown isOpen={this.state.dropdownOpenOut} toggle={this.toggleOut}>
                                    <DropdownToggle caret>
                                        Output Currency
                                    </DropdownToggle> 
                                    <DropdownMenu>
                                    <DropdownItem onClick={this.onClickOutDropdown} name='outputCurrency' value=' SriLankan Rupees'> SriLankan Rupees</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.onClickOutDropdown} name='outputCurrency' value=' US Dollars'> US Dollars</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.onClickOutDropdown} name='outputCurrency' value=' Great Britain Pounds'> Great Britain Pounds</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.onClickOutDropdown} name='outputCurrency' value=' Euro'> Euro</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.onClickOutDropdown} name='outputCurrency' value=' Australian Dollars'>Australian Dollars</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>            

                    {/* //3rd Row */}
                    <div className="row" style={{margin:'10px'}}>

                        <div className="col-5">
                            <p className="card-text">Enter the Amount to be Converted :</p>
                        </div>

                        <div className="col-7">

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <input type="checkbox" aria-label="Checkbox for following text input" />
                                </div>
                                </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        aria-label="Text input with checkbox" 
                                        name='inAmount'
                                        value={this.state.inAmount}
                                        onChange={this.onValueChange} />
                                </div>
                            </div>               
                    </div>

                    {/* //4th Row */}
                    <div className="row" style={{margin:'10px'}}>

                        <div className="col-5">
                            <p className="card-text">Converted Amount:</p>
                        </div>

                        <div className="col-7">

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <input type="checkbox" aria-label="Checkbox for following text input" />
                                </div>
                                </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        aria-label="Text input with checkbox" 
                                        name='outAmount'
                                        value={this.state.outAmount}
                                        onChange={this.onValueChange} 
                                        disabled
                                    />
                                </div>
                            </div>               
                    </div>
                    
                    <input type='button' className="btn btn-primary" value='Calculate' onClick={this.onCalculate} />
                </div>
            </div>

            
          </div>
        );
    }
}

export default Converter;

