export default class UserInfo {
    constructor(titleSelector, descriptionSelector){
        this._title = document.querySelector(titleSelector);
        this._description = document.querySelector(descriptionSelector);
    }
    getUserInfo(){
        this._user = {}
        this._user.title = this._title.textContent
        this._user._description = this._description.textContent
        return this._user
    }
    setUserInfo({title, description}){
        this._title.textContent = title
        this._description.textContent = description
    }
}