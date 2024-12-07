
const path = require("path");
const os = require("os");
// console.log("directory name is :"+__dirname,"\n file name is :"+__filename);
// // console.log(path);
const absPath = "D:/documents/1000coders/nodejs/path.js";
// const fileName = path.basename(absPath);
// console.log("path using basename is :"+fileName);
// const extensionName = path.extname(absPath);
// console.log("path using extname is :"+extensionName);
// const dirName = path.dirname(absPath);
// console.log("path using dirname is :"+dirName);
// const fileName1 = path.basename(__filename,".js",".css",".asd",".html");
// console.log("path using basename with two parameters is :"+fileName1);
///-----------------------------------------research----------------------------------------
// const removeExtensions = (filePath, extensions) => {
//     let baseName = path.basename(filePath);
//     extensions.forEach(ext => {
//       if (baseName.endsWith(ext)) {
//         baseName = baseName.slice(0, -ext.length);
//         console.log("the output is :"+baseName);
//       }
//     });
//     return baseName;
//   };
  
//   // Example Usage
//   const fileName2 = removeExtensions(absPath, ['.js', '.css', '.asd', '.html']);
//   console.log("path using basename with multiple extensions is: " + fileName2);
  //----------------------------------------end----------------------------------------
//   const parse = path.parse(absPath);
//   console.log(parse);
// console.log(parse.dir);
// console.log(parse.root);
// console.log(parse.base);
// console.log(parse.ext);
// console.log(parse.name);
//----------------------------------------------------------------------------------------
// const obj = {
//     root: 'D:/',
//     dir: 'D:/documents/1000coders/nodejs',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
//   }
// const format = path.format(obj);
// console.log(format);
//--------------------------------------------------------------------------------------------
// console.log(path.isAbsolute(absPath));
// let rel = "./abhiram.js/antha na estam";
// console.log(path.isAbsolute(rel));
// ------------------------------------------------------------------------------------------
// console.log(path.join("abhiram","misses.abhiram","abhi.jr"));
// --------------------------------------------------------------------------------------------
// const resolve = path.resolve("abhiram","misses.abhiram","../../abhi.jr");
// console.log(resolve);
// -------------------------------------------------------------------------------------------------
// console.log(os);
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.userInfo());
// console.log(os.release());
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.type());