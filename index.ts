#! /usr/bin/env node

import inquirer from "inquirer";
let user:boolean = true


do{
        let answer= await inquirer.prompt
        (
        [
            {message:"Enter first number",
                type:"number",
                name:'Firstnumber'},
            {message: "enter second number",
                type:"number",
                name :"Secondnumber"},
            {message:"select an operator to perform operation",
                type:"list",name:"operator",
                choices:["addition","subtraction","multiplication","division","modulus","exponent","square root","conversions"]}
        ]
        );

        if( answer.operator === "addition")
        {
        console.log(answer.Firstnumber + answer.Secondnumber)
        }

        else if(answer.operator === "subtraction")
        {
        console.log(answer.Firstnumber - answer.Secondnumber)
        }

        else if(answer.operator === "multiplication")
        {
        console.log(answer.Firstnumber * answer.Secondnumber)
        }

        else if(answer.operator === "division")
        {
        console.log(answer.Firstnumber / answer.Secondnumber)
        }

        else if(answer.operator === "modulus")
        {
            console.log(answer.Firstnumber % answer.Secondnumber)
        }
            
        else if(answer.operator === "exponent")
        {
        console.log(answer.Firstnumber ** answer.Secondnumber)
        }

        else if(answer.operator === "square root")
        {
            let a = await inquirer.prompt({
            message:"select a number",
            type:"list",
            name:"a1",
            choices:["number1","number2"]
            }) 

            if(a.a1 === "number1")
                {
                    console.log(Math.sqrt(answer.Firstnumber));
                    
                    
                }
            else 
            {
                console.log(Math.sqrt(answer.Secondnumber));
            }
        }
        else if(answer.operator === "conversions")
        {
            let b = await inquirer.prompt
            (
                {
                    name:"b1",
                    type:"list",
                    message:"select a conversion",
                    choices:["meters to centimeters","hours to minutes"]
                }
            )
            if(b.b1 === "meters to centimeters")
                {
                    let b11 = await inquirer.prompt({
                        name:"b12",
                        type:"list",
                        message:"select a number",
                        choices:["number1","number2"]
                    })
                    if(b11.b12 === "number1")
                        {
                            console.log(answer.Firstnumber *100+ "cm");
                            
                        }else
                        {
                            console.log(answer.Secondnumber *100+"cm");
                        }
                }
                else
                {
                let c1 =await inquirer.prompt
                ({
                    name:"c11",
                    type:"list",
                    message:"select a number",
                    choices:["number1","number2"]
                })
                if(c1.c11 === "number1")
                    {
                        console.log(answer.Firstnumber *60+"min");
                    }

                    else
                    {
                    console.log(answer.Secondnumber *60+"min");
                    }   
                }   
            }
            let userchoice = await inquirer.prompt
            ({
                name:"userchoi",
                type:"list",
                message:"do you want to calculate ",
                choices:["yes","no"]
            }) 
            if (userchoice.userchoi === "yes")
                {
                   user = true
                }
                else 
                {
                    user =false
                }
        }while(user === true)

            



