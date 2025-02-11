const user:Users={
    "xyz@123" :{age : 21 , name : "xyz"},
    "abc@123" :    {age : 22 , name : "abc"},
}

type Users = Record<string, {age: number , name: string}>