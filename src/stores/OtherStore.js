import alt from '../config/control';
import { createStore, bind } from 'alt/utils/decorators';
import actions from '../actions/OtherActions';

@createStore(alt)
export default class OtherStore{
	constructor(){
		this.testData = "Store Data";
	}

	@bind(actions.sayHello)
	sayHello(){
		this.testData = "Hello From Store!";
		console.log("Action Called!")
	}
}