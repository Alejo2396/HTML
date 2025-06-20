//para
console.log(1)

for(let i=1; i<=100; i=i+1){
    console.log(i)
}


i=1

do{
    console.log(i*2)
    i=i+1
}while(i<=20)

for(let i=1; 1<10;i++){
    if (i%2 === 1){
        continue
    } 
    console.log(i)
}    

let x=4

while(x<10){
    console.log(x)
    x++
    if(x===7) break
}

for( let i=10;i>=1;i--){
    console.log(i)
}
