import alt from '../config/control';
import { createActions } from 'alt/utils/decorators';

@createActions(alt)
export default class OtherAction{
	constructor(){
		this.generateActions('sayHello');
	}
}