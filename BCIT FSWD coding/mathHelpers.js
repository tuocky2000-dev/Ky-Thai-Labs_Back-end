function square(x1,y1,x2,y2){
return (Math.pow((x2-x1),2)+Math.pow((y2-y1),2))
}
function squareRoot(x1,y1,x2,y2){
return (Math.sqrt(square(x1,y1,x2,y2)))
}
function distance(x1,y1,x2,y2){
return(squareRoot(x1,y1,x2,y2))
}
square(10,5,2,3)
squareRoot(10,5,2,3)
distance(10,5,2,3)
module.exports={distance}
