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
      res += (4*this._permission[key].read +
              2*this._permission[key].write +
              this._permission[key].exec);
    }
    return res;
  }

  get binary(): string{
    let res="";
    for(let key in this._permission){
      res += '0';
      res += (+this._permission[key].read);
      res += (+this._permission[key].write);
      res += (+this._permission[key].exec);
    }
    return res;
  }

  get verbose(): string{

    function v(permission){

      let res = '';
      res += (permission.read) ? 'r' : '-';
      res += (permission.write) ? 'w' : '-';
      res += (permission.exec) ? 'x' : '-';
      return res;

    }

    return v(this._permission.special) +
           v(this._permission.user) +
           v(this._permission.group) +
           v(this._permission.other); 
  }
  
  get command(): string{
    return 'chmod ' + this.hex + ' <file>';
  }

  set hex(hexNumber:string){

  }
  
  set binary(binaryNumber:string){

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
}