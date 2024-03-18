class Customer{
    name = "";
    address = "";
    phone = "";
    email = "";
    accounts = [];
    constructor(name,address,phone,email){
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        

    }

    verify(name, address, phone, email){
        if(this.name == name && this.address == address && this.phone == phone && this.email == email ){
            return true;
        }else {
            return false;
        }
    }
//String returns เป็นตัวมัน
//Boolean returns เป็น ถูกผิด true false 
//void returns  เป็นฟังชั้นของตัวมันเอง
    getAccount(){
        return this.accounts;
    }
    
    createAccount(bank,accountType){
        return bank.createAccount(accountType)
    }
    
}

class Account{
    accountNumber = "";
    balance = [0];


    constructor(accountNumber,balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
        
    }
    deposit(amount){

    }
    withdraw(amount){

    }
    createTransaction(){

    }
    getTransaction(){

    }
    getBalance(){

    }
    getAccountType(){

    }
    getCustomer(){
        return 
    }
    set(){

    }
}

class CurrentAccount{
    overdraftLimit = "";
    overdraftlnterest = "";

    constructor(overdraftLimit,overdraftlnterest){
        this.overdraftLimit = overdraftLimit;
        this.overdraftlnterest = overdraftlnterest;
    }
    calculatelnterest(){
        return this.calculatelnterest;
    }
    getOverdraftLimit(){
        return this.getOverdraftLimit;

    }
    setOverdraftLimit(amount){

    }

}

class SavingAccount{
    interestRate = "";

    constructor(interestRate){
        this.interestRate = interestRate;
    }
    calculatelnterest(){
        return this.calculatelnterest;
    }
    getInterestRate(){

    }
    setInterestRate(rate){

    }
}

class Transaction{
    transactionld = "" ;
    transactionType = "";
    amount = [0];
    teansactionDate = "";
    status = "";

    constructor(transactionld,transactionType,amount,teansactionDate,status){
        this.transactionld = transactionld;
        this.transactionType = transactionType;
        this.amount = amount;
        this.teansactionDate = teansactionDate;
        this.status = status;
    }

    getTransactionld(){
        return this.getTransactionld; 
    }
    getTransactionType(){
        return this.getTransactionType;
    }
    getAmount(){
       return this.getAmount;
    }
    getTransactionDate(){

    }
    getStatus(){
        return this.getStatus;
    }
    setStatus(){

    }
    setTransactionType(){

    }
    setAmount(){

    }
    setTransactionDate(){

    }

}

class ATM {
    location = "";
    mangedBy = "";

    constructor(location,mangedBy){
        this.location = location;
        this.mangedBy =mangedBy;

    }

    identify(){

    }
    checkBalance(){

    }
    withdraw(){
        
    }
    deposit(){
        
    }
    changePIN(){

    }
    transfer(){

    }
    verify(){

    }
}


class Bank{
    name = "";
    address = "";
    code = "";

    constructor(name,address,code){
        this.name = name;
        this.address = address;
        this.code = code;
    }

    createAccount(accountType){
       let account;
        if(accountType === "currentAccount"){
          account = new CurrentAccount("654259002",200000,50000,0.2)

          return account;

        }else{
            account = new SavingAccount("654259002",200000,50000,0.2);
            return account;

        }
        
    }

    createCustomer(name,address,phone,email){
        const customer = new Customer("OXE","111/64 NakhonPathom","0924077286","OXE@email.com");
        return customer;

    }
    createATM(location,mangedBy){
        const atm = new ATM ("Orbit","Krungthai");
        return atm;

    }
    manage(){

    }
    main(){

    }
    verify(){

    }
    openAccount(){

    }
    closeAccount(){

    }
    createTransaction(){

    }
   
    
   
}


