export function UseCaptcha(){
    let code='';
    let a=Math.random()*10;
    let b=Math.random()*10;
    let c=Math.random()*10;
    let d=Math.random()*10;
    let e=Math.random()*10;
    let f=Math.random()*10;
    code=`${Math.round(a)}${Math.floor(b)}${Math.floor(c)}${Math.floor(d)}${Math.floor(e)}${Math.floor(f)}`
    return code;
}