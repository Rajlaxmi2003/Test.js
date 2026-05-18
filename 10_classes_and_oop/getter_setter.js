// class User{
//         constructor(email,password){
//             this.email= email;
//             this.password= password
//         }

//         get password(){
//             return this._password.toUpperCase()
//         }
//         set password(value){
//             this._password=value.toUpperCase()
//         }
// }

// const hitesh= new User("h@hitesh@gmail.com","12ffgg")
// console.log(hitesh.password);




// class User{
//         constructor(email,password){
//             this.email= email;
//             this.password= password
//         }

        // get password(){
        //     return `${this._password}hitesh`
        // }
        // set password(value){
        //     this._password=value
        // }
// }

// const hitesh= new User("h@hitesh@gmail.com","12ffgg")
// console.log(hitesh.password);



// class User{
//         constructor(email,password){
//             this.email= email;
//             this.password= password
//         }

//         get email(){
//             return this._email.toUpperCase()
//         }
//         set email(value){
//             this._email=value
//         }
// }

// const hitesh= new User("h@hitesh@gmail.com","12ffgg")
// console.log(hitesh.email);







class User{
        constructor(email,password){
            this.email= email;
            this.password= password
        }

        get email(){
            return this._email.toUpperCase()
        }
        set email(value){
            this._email=value
        }
        get password(){
            return `${this._password}hitesh`
        }
        set password(value){
            this._password=value
        }
}

const hitesh= new User("h@hitesh@gmail.com","12ffgg")
console.log(hitesh.email);
console.log(hitesh.password);