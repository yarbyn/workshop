import { Page } from '@playwright/test';
export class Login {
    page: Page

    constructor(page: Page){
        this.page = page
    }
    
    async open(){
        await this.page.goto('https://shopdemo-alex-hot.koyeb.app/login')
    }
    
    async login(email: string, pass: string){
        await this.open();
        await this.page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill(email)
        await this.page.getByRole('main').getByPlaceholder('Please Enter Your Password').fill(pass)
        await this.page.getByRole('button', { name: 'Login' }).click()
    }
    
    async openAndLogin(email: string, pass: string){
        await this.open();
        await this.login(email, pass)
    }
}

