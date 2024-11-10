export interface Transfer{
    userimage:string;
    username:string;
    date:string;
    amount:number;
    type:'credit' | 'debit';
}