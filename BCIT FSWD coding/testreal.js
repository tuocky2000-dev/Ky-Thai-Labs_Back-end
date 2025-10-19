const fs=require("fs")
function countWords(text){
  let words=text.trim().split(" ")
  let wCount={}
  for(let word of words){
    if(wCount[word]!=undefined){
      wCount[word]++
    }else{
      wCount[word]=1
    }
  }
  return wCount
}
function readMenu(songFile){
  return new Promise((resolve,reject)=>{
    fs.readFile(songFile,"utf-8",(err,data)=>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}
readMenu("song.txt")
.then((text)=>{
  const result=countWords(text)
  console.log(result)
})
.catch((err)=>{console.log(err)})
