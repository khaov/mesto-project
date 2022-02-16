export default class UserInfo {
  constructor(avatarSelector, nameSelector, aboutSelector) {
    this._profileAvatar = document.querySelector(avatarSelector);
    this._profileName = document.querySelector(nameSelector);
    this._profileAbout = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    return {
      avatar: this._profileAvatar.src,
      name:   this._profileName.textContent,
      about:  this._profileAbout.textContent
    };
  }

  setUserInfo({avatar, name, about}) {
    if(avatar)  this._profileAvatar.src = avatar;
    if(name)    this._profileName.textContent = name;
    if(about)   this._profileAbout.textContent = about;
  }
}
