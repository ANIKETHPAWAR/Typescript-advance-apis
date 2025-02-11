const users = new Map<string,UserType>()
users.set("xyz@123" ,{age : 21 , name : "xyz"},
    )
    users.set("abc@123" ,  {age : 22 , name : "abc"},)

    const user = users.get("xyz@123")
    console.log(user);

    type UserType = {
        name : string,
        age : number,
        email? : string
    }