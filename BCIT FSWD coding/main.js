const fs = require ("fs");
const os = require ("os")
const mathHelpers = require("./mathHelpers.js");
const readlineSync= require("readline-sync");
const x1 = Number(process.argv[2]);
const y1 = Number(process.argv[3]);
const x2 = Number(process.argv[4]);
const y2 = Number(process.argv[5]);


function processInput(x1,y1,x2,y2){
    fs.stat("dataPoints", function(err,stats){
        if(err){
            fs.mkdir("dataPoints", function(err){
                if (err){
                    console.log (err)
                }
            })
        }else if (stats.isDirectory()){
            console.log("Folder already exists")
        }
    })
    fs.writeFile("dataPoints/points.txt", "Content saved" + os.EOL, function(err){
        if (err){
            console.log(err)
        }else{
            fs.appendFile("dataPoints/points.txt",`The distance between your two points: (${x1};${x2}), (${y1};${y2}) is ${mathHelpers.distance(x1,y1,x2,y2)}`, function(err){
                if (err){
                    console.log (err)
                }})
    fs.readFile("dataPoints/points.txt", "utf-8", function(err,data){
                if (err){
                    console.log(err)
                }else{
                    console.log(data.toString())
                }
            })
        }
    })
}
processInput(x1,y1,x2,y2)