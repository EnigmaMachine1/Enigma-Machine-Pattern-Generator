'use strict';

const generation = document.querySelector('.gen-btn');
const main = document.querySelector('main')
const codes = Array.from(document.querySelectorAll('.code'));
const codeContainer = Array.from(document.querySelectorAll('.code-container'));
let codeArray = [];

generation.addEventListener('click', transition);
generation.addEventListener('click', generateCodes);

function transition() {
    codeContainer.forEach(e=>{
        e.classList.remove('fade');
        e.classList.add('fade');
    });
}

function generateCodes() {
    if(main.classList.contains('hide')) {
        main.classList.remove('hide');
       }
    let codequantity = 3;
    let count = 1;
    codeArray = [];
   while (!(count>codequantity)) {
      let code = '';
      count =count+1;
      let codetype = Math.floor((Math.random()*6)+1);
      if (codetype==1) {
         generateLineCode(code,false);
      }
      if (codetype==2) {
         generateShapeCode(code,false);
      }
      if (codetype==3) {
         generateEdgingCode(code,false);
      }
      if (codetype==4) {
         generateTendrilCode(code,false);
      }
      if (codetype==5) {
         generateTowerCode(code,false);
      }
      if (codetype==6) {
         generateUncategorizedCode(code,false);
      }
   }
   let i = 0
   codeArray.forEach(e=>{
    codes[i].textContent = e;
    i++;
   });
}

function generateLineCode (code, secondary) {

   if (secondary==true) {
      code =code+"(";
   }
   
   code =code+"1";
   let rolldirection =Math.floor((Math.random()*8)+1);
   code =code+"-"+rolldirection;
   if (secondary==true) {
      rollLinePatterns(code,true);
   }
   else {
      rollLinePatterns(code,false);
   }
}

function rollLinePatterns (code, secondary) {
   let pattern;
   let patterntype;

   let patternnumber =Math.floor((Math.random()*5)+2);
   code =code+"-"+patternnumber;
   let count =1;
   while (!(count>patternnumber)) {
      pattern =Math.floor((Math.random()*10)+1);
      if (pattern==1) {
         patterntype =Math.floor((Math.random()*3)+1);
      }
      if (pattern==2) {
         patterntype =1;
      }
      if (pattern==3) {
         patterntype =Math.floor((Math.random()*4)+1);
      }
      if (pattern==4) {
         patterntype =Math.floor((Math.random()*3)+1);
      }
      if (pattern==5) {
         patterntype =Math.floor((Math.random()*2)+1);
      }
      if (pattern==6) {
         patterntype =Math.floor((Math.random()*10)+1);
      }
      if (pattern==7) {
         patterntype =Math.floor((Math.random()*2)+1);
      }
      if (pattern==8) {
         patterntype =Math.floor((Math.random()*2)+1);
      }
      if (pattern==9) {
         patterntype =Math.floor((Math.random()*8)+1);
      }
      if (pattern==10) {
         patterntype =Math.floor((Math.random()*2)+1);
      }
      code =code+"-"+pattern+"."+patterntype;
      count =count+1;
   }
   if (secondary==true) {
      code =code+")";
   }
   
   codeArray.push(code);
}

function generateShapeCode (code, secondary) {
   let rollshape;

   if (secondary==true) {
      code =code+"(";
   }
   
   code =code+"2";
   rollshape =Math.floor((Math.random()*4)+1);
   code =code+"-"+rollshape;
   if (secondary==true) {
      rollShapePatterns(code,true);
   }
   else {
      rollShapePatterns(code,false);
   }

}

function rollShapePatterns (code, secondary) {
   let count;
   let patternnumber;
   let patterntype;
   let pattern;

   patternnumber =Math.floor((Math.random()*5)+2);
   code =code+"-"+patternnumber;
   count =1;
   while (!(count>patternnumber)) {
      pattern =Math.floor((Math.random()*11)+1);
      if (pattern==1) {
         patterntype =Math.floor((Math.random()*3)+1);
      }
      if (pattern==2) {
         patterntype =1;
      }
      if (pattern==3) {
         patterntype =Math.floor((Math.random()*10)+1);
      }
      if (pattern==4) {
         patterntype =Math.floor((Math.random()*3)+1);
      }
      if (pattern==5) {
         patterntype =Math.floor((Math.random()*2)+1);
      }
      if (pattern==6) {
         patterntype =Math.floor((Math.random()*12)+1);
      }
      if (pattern==7) {
         patterntype =Math.floor((Math.random()*3)+1);
      }
      if (pattern==8) {
         patterntype =Math.floor((Math.random()*2)+1);
      }
      if (pattern==9) {
         patterntype =Math.floor((Math.random()*8)+1);
      }
      if (pattern==10) {
         patterntype =Math.floor((Math.random()*2)+1);
      }
      if (pattern==11) {
         patterntype =Math.floor((Math.random()*4)+1);
      }
      code =code+"-"+pattern+"."+patterntype;
      count =count+1;
   }
   if (secondary==true) {
      code =code+")";
   }
   
   codeArray.push(code);
}

function generateEdgingCode (code, secondary) {
   let patterntype;
   let pattern;
   let rolltype;
   let rollshape;

   if (secondary==true) {
      code =code+"(";
   }
   
   code =code+"3";
   rolltype =Math.floor((Math.random()*4)+1);
   code =code+"-"+rolltype;
   if (rolltype==1) {
      if (secondary==true) {
         rollShapePatterns(code,true);
      }
      else {
         rollShapePatterns(code,false);
      }
   }
   
   if (rolltype==2) {
      if (secondary==true) {
         rollShapePatterns(code,true);
      }
      else {
         rollShapePatterns(code,false);
      }
   }
   
   if (rolltype==3) {
      pattern =Math.floor((Math.random()*3)+1);
      patterntype =Math.floor((Math.random()*6)+1);
      code =code+"-"+pattern+"."+patterntype;
      if (secondary==true) {
         code =code+")";
      }
      
      codeArray.push(code);}
   
   if (rolltype==4) {
      rollshape =Math.floor((Math.random()*4)+1);
      code =code+"-"+rollshape;
      if (secondary==true) {
         rollShapePatterns(code,true);
      }
      else {
         rollShapePatterns(code,false);
      }
   }
   
}

function generateTendrilCode (code, secondary) {
   let rollbackgroundpattern;
   let codetype;
   let patterntype;
   let pattern;
   let rolltendrilpattern;

   if (secondary==true) {
      code =code+"(";
   }
   
   code =code+"4";
   pattern =Math.floor((Math.random()*3)+1);
   if (pattern==1) {
      patterntype =Math.floor((Math.random()*3)+1);
   }
   if (pattern==2) {
      patterntype =Math.floor((Math.random()*3)+1);
   }
   if (pattern==3) {
      patterntype =Math.floor((Math.random()*5)+1);
   }
   code =code+"-"+pattern+"."+patterntype;
   rolltendrilpattern =Math.floor((Math.random()*2)+1);
   code =code+"-"+rolltendrilpattern;
   if (rolltendrilpattern==2) {
      pattern =Math.floor((Math.random()*10)+1);
      if (pattern==1) {
         patterntype =Math.floor((Math.random()*3)+1);
      }
      if (pattern==2) {
         patterntype =1;
      }
      if (pattern==3) {
         patterntype =Math.floor((Math.random()*4)+1);
      }
      if (pattern==4) {
         patterntype =Math.floor((Math.random()*3)+1);
      }
      if (pattern==5) {
         patterntype =Math.floor((Math.random()*2)+1);
      }
      if (pattern==6) {
         patterntype =Math.floor((Math.random()*10)+1);
      }
      if (pattern==7) {
         patterntype =Math.floor((Math.random()*2)+1);
      }
      if (pattern==8) {
         patterntype =Math.floor((Math.random()*2)+1);
      }
      if (pattern==9) {
         patterntype =Math.floor((Math.random()*8)+1);
      }
      if (pattern==10) {
         patterntype =Math.floor((Math.random()*2)+1);
      }
      
      code =code+"-"+pattern+"."+patterntype;
   }
   
   if (secondary==true) {
      rollbackgroundpattern =Math.floor((Math.random()*2)+1);
   }
   else {
      rollbackgroundpattern =Math.floor((Math.random()*3)+1);
   }
   code =code+"-"+rollbackgroundpattern;
   if (rollbackgroundpattern==2) {
      pattern =Math.floor((Math.random()*10)+1);
      if (pattern==1) {
         patterntype =Math.floor((Math.random()*3)+1);
      }
      if (pattern==2) {
         patterntype =1;
      }
      if (pattern==3) {
         patterntype =Math.floor((Math.random()*4)+1);
      }
      if (pattern==4) {
         patterntype =Math.floor((Math.random()*3)+1);
      }
      
      if (pattern==5) {
         patterntype =Math.floor((Math.random()*2)+1);
      }
      if (pattern==6) {
         patterntype =Math.floor((Math.random()*10)+1);
      }
      if (pattern==7) {
         patterntype =Math.floor((Math.random()*2)+1);
      }
      if (pattern==8) {
         patterntype =Math.floor((Math.random()*2)+1);
      }
      if (pattern==9) {
         patterntype =Math.floor((Math.random()*8)+1);
      }
      if (pattern==10) {
         patterntype =Math.floor((Math.random()*2)+1);
      }
      
      code =code+"-"+pattern+"."+patterntype;
   }
   
   if (rollbackgroundpattern==3) {
      codetype =Math.floor((Math.random()*6)+1);
      if (codetype==1) {
         generateLineCode(code,true);
      }
      if (codetype==2) {
         generateShapeCode(code,true);
      }
      if (codetype==3) {
         generateEdgingCode(code,true);
      }
      if (codetype==4) {
         generateTendrilCode(code,true);
      }
      if (codetype==5) {
         generateTowerCode(code,true);
      }
      if (codetype==6) {
         generateUncategorizedCode(code,true);
      }
   }
   else {
      if (secondary==true) {
         code =code+")";
      }
      
      codeArray.push(code);   }
}

function generateTowerCode (code, secondary) {
   let codetype;
   let rolldirection;
   let towerpattern;
   let patterntype;
   let rollbackground;
   let pattern;

   if (secondary==true) {
      code =code+"(";
   }
   
   code =code+"5";
   rolldirection =Math.floor((Math.random()*8)+1);
   towerpattern =Math.floor((Math.random()*3)+1);
   code =code+"-"+rolldirection+"-"+towerpattern;
   if (towerpattern==3) {
      rollbackground =Math.floor((Math.random()*2)+1);
      code =code+"-"+rollbackground;
      if (rollbackground==2) {
         pattern =Math.floor((Math.random()*10)+1);
         if (pattern==1) {
            patterntype =Math.floor((Math.random()*3)+1);
         }
         if (pattern==2) {
            patterntype =1;
         }
         if (pattern==3) {
            patterntype =Math.floor((Math.random()*4)+1);
         }
         if (pattern==4) {
            patterntype =Math.floor((Math.random()*3)+1);
         }
         if (pattern==5) {
            patterntype =Math.floor((Math.random()*2)+1);
         }
         if (pattern==6) {
            patterntype =Math.floor((Math.random()*10)+1);
         }
         if (pattern==7) {
            patterntype =Math.floor((Math.random()*2)+1);
         }
         if (pattern==8) {
            patterntype =Math.floor((Math.random()*2)+1);
         }
         if (pattern==9) {
            patterntype =Math.floor((Math.random()*8)+1);
         }
         if (pattern==10) {
            patterntype =Math.floor((Math.random()*2)+1);
         }
         
         code =code+"-"+pattern+"."+patterntype;
      }
      
      if (secondary==true) {
         code =code+")";
      }
      
      codeArray.push(code);   }
   else {
      if (secondary==true) {
         rollbackground =Math.floor((Math.random()*2)+1);
      }
      else {
         rollbackground =Math.floor((Math.random()*3)+1);
      }
      code =code+"-"+rollbackground;
      if (rollbackground==2) {
         pattern =Math.floor((Math.random()*10)+1);
         if (pattern==1) {
            patterntype =Math.floor((Math.random()*3)+1);
         }
         if (pattern==2) {
            patterntype =1;
         }
         if (pattern==3) {
            patterntype =Math.floor((Math.random()*4)+1);
         }
         if (pattern==4) {
            patterntype =Math.floor((Math.random()*3)+1);
         }
         if (pattern==5) {
            patterntype =Math.floor((Math.random()*2)+1);
         }
         if (pattern==6) {
            patterntype =Math.floor((Math.random()*10)+1);
         }
         if (pattern==7) {
            patterntype =Math.floor((Math.random()*2)+1);
         }
         if (pattern==8) {
            patterntype =Math.floor((Math.random()*2)+1);
         }
         if (pattern==9) {
            patterntype =Math.floor((Math.random()*8)+1);
         }
         if (pattern==10) {
            patterntype =Math.floor((Math.random()*2)+1);
         }
         
         code =code+"-"+pattern+"."+patterntype;
      }
      
      if (rollbackground==3) {
         codetype =Math.floor((Math.random()*6)+1);
         if (codetype==1) {
            generateLineCode(code,true);
         }
         if (codetype==2) {
            generateShapeCode(code,true);
         }
         if (codetype==3) {
            generateEdgingCode(code,true);
         }
         if (codetype==4) {
            generateTendrilCode(code,true);
         }
         if (codetype==5) {
            generateTowerCode(code,true);
         }
         if (codetype==6) {
            generateUncategorizedCode(code,true);
         }
      }
      else {
         if (secondary==true) {
            code =code+")";
         }
         
         codeArray.push(code);      }
   }
}

function generateUncategorizedCode (code, secondary) {
   let codetype;
   let rolldirection;
   let pattern;
   let type;
   let rollbackground;
   let rolltype;
   let patterntype;

   if (secondary==true) {
      code =code+"(";
   }
   
   code =code+"6";
   type =Math.floor((Math.random()*2)+1);
   code =code+"-"+type;
   if (type==1) {
      rolltype =Math.floor((Math.random()*4)+1);
      rollbackground =Math.floor((Math.random()*3)+1);
      code =code+"-"+rolltype+"-"+rollbackground;
      if (rollbackground==2) {
         pattern =Math.floor((Math.random()*10)+1);
         if (pattern==1) {
            patterntype =Math.floor((Math.random()*3)+1);
         }
         if (pattern==2) {
            patterntype =1;
         }
         if (pattern==3) {
            patterntype =Math.floor((Math.random()*4)+1);
         }
         if (pattern==4) {
            patterntype =Math.floor((Math.random()*3)+1);
         }
         if (pattern==5) {
            patterntype =Math.floor((Math.random()*2)+1);
         }
         if (pattern==6) {
            patterntype =Math.floor((Math.random()*10)+1);
         }
         if (pattern==7) {
            patterntype =Math.floor((Math.random()*2)+1);
         }
         if (pattern==8) {
            patterntype =Math.floor((Math.random()*2)+1);
         }
         if (pattern==9) {
            patterntype =Math.floor((Math.random()*8)+1);
         }
         if (pattern==10) {
            patterntype =Math.floor((Math.random()*2)+1);
         }
         
         code =code+"-"+pattern+"."+patterntype;
      }
      
      if (rollbackground==3) {
         codetype =Math.floor((Math.random()*6)+1);
         if (codetype==1) {
            generateLineCode(code,true);
         }
         if (codetype==2) {
            generateShapeCode(code,true);
         }
         if (codetype==3) {
            generateEdgingCode(code,true);
         }
         if (codetype==4) {
            generateTendrilCode(code,true);
         }
         if (codetype==5) {
            generateTowerCode(code,true);
         }
         if (codetype==6) {
            generateUncategorizedCode(code,true);
         }
      }
      else {
         if (secondary==true) {
            code =code+")";
         }
         
         codeArray.push(code);      }
   }
   else {
      rolldirection =Math.floor((Math.random()*2)+1);
      rolltype =Math.floor((Math.random()*2)+1);
      code =code+"-"+rolldirection+"-"+rolltype;
      rollLinePatterns(code,false);
   }
}