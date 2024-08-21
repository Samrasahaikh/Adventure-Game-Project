#! /usr/bin/env node
// Adventure Game Project

//step 1
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magenta("\t\n=============================================================================\n"));
console.log(chalk.yellow("<<<<<<<<<<<<<<<<<<<<<<< Welcome To The Advanture Game >>>>>>>>>>>>>>>>>>>>>>>\t"))
console.log(chalk.magenta("\t\n=============================================================================\n"))
class Player {
    name : string;
    fuel : number = 100;
    constructor (name : string ){
        this.name = name ;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25;
        this.fuel = fuel
    };
    fuelIncrease(){
        this.fuel = 100
    };
};
 class Opponent {
    name : string;
    fuel : number = 100;
    constructor(name : string ){
        this.name =name 
    }
    fuelDecrease(){
        let fuel = this.fuel - 25;
        this.fuel = fuel
    };

 };

 //step 2

 let  player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.cyan("Please Enter your name:")
    }
 ]);

let opponent = await inquirer.prompt([
    {
        name: "Select",
        type : "list",
        message : chalk.cyan("Select your opponent"),
        choices : ["Skeleton", "Alien", "Zombie"]
    }
]);

let p1 = new Player(player.name);
let o1 = new Opponent(opponent.Select);

//step 3 Skeleton
do{
    if (opponent.Select == "Skeleton"){
        let ask = await inquirer.prompt([
            {
                name : "opt",
                type : "list",
                message : chalk.yellow("What Would You Like To Do ?"),
                choices : ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2) 
            if (num > 0){
                p1.fuelDecrease()
                console.log (chalk.magenta(`${p1.name} fuel is ${p1.fuel}`));
                console.log (chalk.magenta(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0){
                    console.log (chalk.red("You Loose, Better Luck NExt Time"));
                    process.exit()
                    
                }
            }
            if (num <= 0){
                o1.fuelDecrease()
                console.log(chalk.magenta(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0){
                    console.log (chalk.green("Configuration! You Won"));
                    process.exit()
                    
                }
            }
        };

        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log (chalk.cyan(`You Drink Health Portion Your Fuel is ${p1.fuel}`));  
        };
        if (ask.opt == "Run For Your Life.."){
            console.log (chalk.red("You Loose, Better Luck NExt Time"));
            process.exit()
               
        };
    }

    //step 4 Alien
    if (opponent.Select == "Alien"){
        let ask = await inquirer.prompt([
            {
                name : "opt",
                type : "list",
                message : chalk.yellow("What Would You Like To Do ?"),
                choices : ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2) 
            if (num > 0){
                p1.fuelDecrease()
                console.log(chalk.magenta(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0){
                    console.log (chalk.red("You Loose, Better Luck NExt Time"));
                    process.exit()
                    
                }
            }
            if (num <= 0){
                o1.fuelDecrease()
                console.log(chalk.magenta(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0){
                    console.log (chalk.green("Configuration! You Won"));
                    process.exit()
                    
                }
            }
        };

        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log (chalk.cyan(`You Drink Health Portion Your Fuel is ${p1.fuel}`));  
        };
        if (ask.opt == "Run For Your Life.."){
            console.log (chalk.red("You Loose, Better Luck NExt Time"));
            process.exit()
               
        };
    }

    //step 5 Zombie 
    if (opponent.Select == "Zombie"){
        let ask = await inquirer.prompt([
            {
                name : "opt",
                type : "list",
                message : chalk.yellow("What Would You Like To Do ?"),
                choices : ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2) 
            if (num > 0){
                p1.fuelDecrease()
                console.log(chalk.magenta(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0){
                    console.log (chalk.red("You Loose, Better Luck NExt Time"));
                    process.exit()
                    
                }
            }
            if (num <= 0){
                o1.fuelDecrease()
                console.log(chalk.magenta(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0){
                    console.log (chalk.green("Configuration! You Won"));
                    process.exit()
                    
                }
            }
        };

        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log (chalk.cyan(`You Drink Health Portion Your Fuel is ${p1.fuel}`));  
        };
        if (ask.opt == "Run For Your Life.."){
            console.log (chalk.red("You Loose, Better Luck NExt Time"));
            process.exit()
               
        };
    }
}
while(true)