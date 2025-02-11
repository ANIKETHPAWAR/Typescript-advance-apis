const users = new Map()
users.set("xyz@123" ,{age : 21 , name : "xyz"},
    )
    users.set("abc@123" ,  {age : 22 , name : "abc"},)

    const user = users.get("xyz@123")
    console.log(user);