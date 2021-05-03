const fs = require('fs')
const readline = require('readline')
const archivo = "src/data.txt"

const readInterface = readline.createInterface({
    input: fs.createReadStream(archivo).on("error", err => console.log(err)),
    //output: process.stdout,
    console: false
});

    // READ FILE
    let nline = 0
    readInterface.on('line', function(line) {      
        navigate.move(line, nline); 
        nline++
    });
    

const navigate = {}

    navigate.move = (line, nline) => {
        const dir = ["N","E","S","W"]
        console.log(nline)
        if(nline==0){
            // validate 2 length and being numbers else return with error
            xmax = line.split(" ")[0]; ymax = line.split(" ")[1];
            //console.log("Y: "+ymax); return}
        }
        if (nline>0 && nline%2==1){
            // validate 3 length and being 2 numbers 1 string in dir array
            xpos = parseInt(line.split(" ")[0]); ypos = parseInt(line.split(" ")[1]); dirini = line.split(" ")[2]; dirindex = dir.indexOf(dirini)
        }
        if (nline>0 && nline%2==0){
            // validate if all elements are in moves array
            mov = line.split("");
            for (var v=0;v<mov.length;v++){
                if(mov[v]=="L"){
                    var index = dirindex==0?3:dirindex-1; dirindex=index;
                    dir_rob = dir[index];
                    //console.log(dir_rob);
                }
                if(mov[v]=="R"){
                    var index = dirindex==3?0:dirindex+1; dirindex=index;
                    dir_rob = dir[index];
                    //console.log(dir_rob);
                }
                if(mov[v]=="M"){
                    if(dir_rob=="N"){
                        if(ypos<ymax){ypos = ypos + 1;}else{console.log("ERROR: Out of bondary")}
                    }
                    if(dir_rob=="S"){
                        if(ypos>0){ypos = ypos - 1;}else{console.log("ERROR: Out of bondary")}
                    }
                    if(dir_rob=="E"){
                        if(xpos<xmax){xpos = xpos + 1;}else{console.log("ERROR: Out of bondary")}
                    }
                    if(dir_rob=="W"){
                        if(xpos>0){xpos = xpos - 1;}else{console.log("ERROR: Out of bondary")}
                    }
                }
            }

           console.log("RESPONSE:")
           console.log(xpos+" "+ypos+" "+dir_rob)
        }
    }

module.exports = navigate
module.exports.archivo = archivo
