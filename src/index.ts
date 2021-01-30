import inquirer from 'inquirer'
import chalk from 'chalk'
import {exec} from 'child_process'
const map = new Map();
const sshStr = 'git@github.com:Stefanieissun/express-ts-template.git';
const koaSSH = 'git@gitlab.com:Stefanieissun/koats.git';
map.set('express-ts',sshStr);
map.set('koa-ts',koaSSH);
inquirer.prompt([
    {
        type:'list',
        name:'kuangjia',
        message:chalk.red('which do you want?'),
        choices:[
            "express-ts",
            "koa-ts",
            "midway"
        ]
    }
]).then(answer=>{
    console.log(answer);
    const {kuangjia} = answer;
    const url = map.get(kuangjia);
    exec(`git clone ${url}`).on('message',res=>console.log(res.toString())).on('close',()=>console.log('over'))
})