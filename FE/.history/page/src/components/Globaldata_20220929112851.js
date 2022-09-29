import { atom, selector } from "recoil";
export const LoginStatus = atom({
  key: "LoginStatus",
  default: true,
});
export const board = atom({
  key: "BoardStatus",
  default: false,
});
export const TokenStatus = atom({
  key: "Tokenerror",
  default: "",
});
export const BackupDaily = atom({
  key: "Backupdaily",
  default: [],
});
export const ASPBackup = atom({
  key: "ASPBackup",
  default: [],
});
export const OFmonitor = atom({
  key: "OFmonitor",
  default: [],
});
export const OFgw = atom({
  key: "OFmonitor",
  default: [],
});
