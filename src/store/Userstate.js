import { atom } from "recoil";

export const UserState = atom({
    key: "userState", /* stateを参照するためのkeyをつける必要がある */
    default: { isAdmin: false }, /* defaultの値を与える必要がある */
}); /* atomを使ってグローバルなstateを定義する */

