class User {
    name: string;
    lastname: string;
    old : number;
    phoneNumber:number;

    constructor(name: string, lastname: string,old:number,phoneNumber:number) {
        this.name = name;
        this.lastname = lastname;
        this.old=old;
        this.phoneNumber=phoneNumber;
    }

    ToString():string{
        return this.name+" "+this.lastname+" "+this.old+" "+this.phoneNumber;
    }
    IsNull():boolean{
        return this.name=="" && this.lastname==""&& this.old==0 && this.phoneNumber==0;
    }
    IsNameCorrect():boolean{
        return true;
    }
    IsLastNameCorrect():boolean{
        return true;
    }
    IsOldCorrect():boolean{
        return true;
    }
    IsNumberCorrect():boolean{
        return true;
    }
    IsCorrect():boolean{
        return this.IsLastNameCorrect() && this.IsNameCorrect() && this.IsOldCorrect() && this.IsNumberCorrect();
    }
}
export default User;