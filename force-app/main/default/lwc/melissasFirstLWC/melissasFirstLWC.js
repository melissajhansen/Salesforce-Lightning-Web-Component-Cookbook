import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi'; 
import USER_NAME from '@salesforce/schema/User.Name'
const fields = [USER_NAME]; 

export default class MelissasFirstLWC extends LightningElement {
    @api recordId;
    currentDate;

    @wire(getRecord, { recordId: "$recordId", fields }) 
    user; 

    get userName() { 
        return getFieldValue(this.user.data, USER_NAME); 
    } 

    updateDate() { 
        this.currentDate = Date.now(); 
    } 
}