export class Permission {
  private _permission;
  
  constructor() {
    this._permission = {
      special: new PermGroup,
      user: new PermGroup,
      group: new PermGroup,
      other: new PermGroup
    }
  }

  get special(){
    return this._permission.special;
  }

  get user(){
    return this._permission.user;
  }

  get group(){
    return this._permission.group;
  }

  get other(){
    return this._permission.other;
  }

  set special(s){
    this._permission.special=s;
  }

  set user(u){
    this._permission.user=u;
  }

  set group(g){
    this._permission.group=g;
  }

  set other(o){
    this._permission.other=o;
  }

  get hex(): string{
    let res="";
    for(let key in this._permission){
      res += this._permission[key].hex;
    }
    return res;
  }

  get binary(): string{
    let res="";
    for(let key in this._permission){
      res += this._permission[key].binary;
    }
    return res;
  }

  get verbose(): string{
    let res = '';
    for(let key in this._permission){
      res += this._permission[key].verbose;
    }
    return res;
  }
  
  get command(): string{
    return 'chmod ' + this.hex + ' <file>';
  }

  set hex(hex:string){

  }
  
  set binary(binary:string){

  }

  set verbose(verbose:string){
    
  }

}

class PermGroup{

  _read:boolean;
  _write:boolean;
  _exec:boolean;

  constructor(){
    this._read=false;
    this._write=false;
    this._exec=false;
  }

  get read():boolean{
    return this._read;
  }

  set read(r:boolean){
    this._read = r;
  }
  
  get write():boolean{
    return this._write;
  }

  set write(w:boolean){
    this._write = w;
  }
  
  get exec():boolean{
    return this._exec;
  }

  set exec(e:boolean){
    this._exec = e;
  }

  get hex(): string{
    let res='';
    res += (4*(+this._read) +
            2*(+this._write) +
            (+this._exec));
    return res;
  }

  get binary(): string{
    let res = '0';
    res += (+this._read);
    res += (+this._write);
    res += (+this._exec);
    return res;
  }

  get verbose(): string{
      let res = '';
      res += (this._read) ? 'r' : '-';
      res += (this._write) ? 'w' : '-';
      res += (this._exec) ? 'x' : '-';
      return res;
    }
}