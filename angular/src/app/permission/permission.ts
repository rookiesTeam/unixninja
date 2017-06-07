export class Permission {
  private _permission;
  private _flags;

  constructor() {
    this._permission = {
      special: new PermGroup,
      user: new PermGroup,
      group: new PermGroup,
      other: new PermGroup
    }
    this._flags = {
      force: false,
      nosymlynk: false,
      recursively: false
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
    let command = 'chmod';
    command += this.appendFlags();
    command += this.hex;
    command += ' <file>';
    return command;
  }

  private appendFlags() {
    let flags = '';
    if(this.force || this.nosymlynk || this.recursively)
      flags += ' -';
    if(this.force)
      flags += 'f';
    if(this.nosymlynk)
      flags += 'h';
    if(this.recursively)
      flags += 'R';
    flags += ' ';
    return flags;
  }

  set hex(hex:string){
    console.log(this._permission);
    if(hex.length === 4){
      this._permission.special.hex = hex[0];
      this._permission.user.hex = hex[1];
      this._permission.group.hex = hex[2];
      this._permission.other.hex = hex[3];
    }
    else{
      if(hex.length > 4){
        this.hex = hex.slice(hex.length-4, hex.length);
      }
    }
  }

  set binary(binary:string){
    if(binary.length === 16){
      this._permission.special.binary = binary.slice(0, 4);
      this._permission.user.binary = binary.slice(4, 8);
      this._permission.group.binary = binary.slice(8, 12);
      this._permission.other.binary = binary.slice(12, 16);
    }
    else{
      if(binary.length > 16){
        this.binary = binary.slice(binary.length-16, binary.length);
      }
    }
  }

  set verbose(verbose:string){
    if(verbose.length === 12){
      this._permission.special.verbose = verbose.slice(0, 3);
      this._permission.user.verbose = verbose.slice(3, 6);
      this._permission.group.verbose = verbose.slice(6, 9);
      this._permission.other.verbose = verbose.slice(9, 12);
    }
    else{
      if(verbose.length > 12){
        this.verbose = verbose.slice(verbose.length-12, verbose.length);
      }
    }
  }

  get force(): boolean {
    return this._flags.force;
  }

  get nosymlynk(): boolean {
    return this._flags.nosymlynk;
  }

  get recursively(): boolean {
    return this._flags.recursively;
  }

  set force(new_value: boolean) {
    this._flags.force = new_value;
  }

  set nosymlynk(new_value: boolean) {
    this._flags.nosymlynk = new_value;
  }

  set recursively(new_value: boolean) {
    this._flags.recursively = new_value;
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
    res += (4*(+this.read) +
            2*(+this.write) +
            (+this.exec));
    return res;
  }

  get binary(): string{
    let res = '0';
    res += (+this.read);
    res += (+this.write);
    res += (+this.exec);
    return res;
  }

  get verbose(): string{
    let res = '';
    res += (this.read) ? 'r' : '-';
    res += (this.write) ? 'w' : '-';
    res += (this.exec) ? 'x' : '-';
    return res;
  }

  set hex(hex){
    let aux = parseInt(hex);
    if(aux > 3){
      this.read = true;
      aux-=4;
    }
    if(aux>1){
      this.write = true;
      aux-=2;
    }
    this.exec = (aux>0);
  }

  set binary(binary){
    this.read = (binary[2]==='1');
    this.write = (binary[1]==='1');
    this.exec = (binary[0]==='1');
  }

  set verbose(verbose){
    this.read = (verbose[2]==='r');
    this.write = (verbose[1]==='w');
    this.exec = (verbose[0]==='x');
  }
}
