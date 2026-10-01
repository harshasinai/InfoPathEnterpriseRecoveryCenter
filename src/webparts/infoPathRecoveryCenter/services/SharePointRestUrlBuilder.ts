function esc(v:string):string{return v.replace(/'/g,"''");}
export function byServerRelativePath(path:string):string{return `GetFolderByServerRelativePath(decodedurl='${esc(path)}')`;}
export function fileByServerRelativePath(path:string):string{return `GetFileByServerRelativePath(decodedurl='${esc(path)}')`;}
export function addUsingPath(fileName:string,overwrite=false):string{return `Files/AddUsingPath(decodedurl='${esc(fileName)}',overwrite=${overwrite?'true':'false'})`;}
