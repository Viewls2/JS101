class userInfo {
    constructor({email, password, userName, height, weight,age}) {  //{constuctor parameter} เพื่อแยกส่วนparameterในการเรียกใช้
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.height = height;
        this.weight = weight;
        this.age = age;
    }
}

class user1 extends userInfo {
    constructor({email, userName, age}) { //เรียกparameters เฉพาะที่จะใช้งาน โดยมี{}ครอบ
        super({email, userName,age});
    }
}


const userInfo1 = new user1({email: 'admin@admin.com', userName: 'Admin1', age: 23 }); //assign ค่าเฉพาะที่เราต้องการจะใส่
console.log(userInfo1.email); 
console.log(userInfo1.userName); 
console.log(userInfo1.age); 