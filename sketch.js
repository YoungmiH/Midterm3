var page =0;
var FO, FO1, FO2, FO3, FO4;
var TDL1, TDL2, TDL3, TDL4;
var SR1, SR2, SR3, SR4, SR5;



function preload(){
  FO1 = loadImage('assets/First Onboarding 1.png');
  FO2 = loadImage('assets/First Onboarding 2.png');
  FO3 = loadImage('assets/First Onboarding 3.png');
  FO4 = loadImage('assets/First Onboarding 4.png');
  TDL1 = loadImage('assets/2 days later 1.jpg');
  TDL2 = loadImage('assets/2 days later 2.jpg');
  TDL3 = loadImage('assets/2 days later 3.jpg');
  TDL4 = loadImage('assets/2 days later 4.jpg');
  TDL5 = loadImage('assets/2 days later 5.jpg');
  TDL6 = loadImage('assets/2 days later 6.jpg');
  TDL7 = loadImage('assets/2 days later 7.jpg');
  TDL8 = loadImage('assets/2 days later 8.jpg');
  TDL9 = loadImage('assets/2 days later 9.jpg');
  SR1 = loadImage('assets/Spolied Rasberries 1.jpg');
  SR2 = loadImage('assets/Spolied Rasberries 2.jpg');
  SR3 = loadImage('assets/Spolied Rasberries 4.jpg');
  SR4 = loadImage('assets/Spolied Rasberries 5.jpg');
}


function setup(){

  canvas = createCanvas(575,667);

  b1x = 70; b1y = 70;
  btxLo = 480; btyLo = 100;

}


function draw(){
  clear();
  noStroke();

  //deck on the screen
  fill(255);
  rect(375, 0, 200, 667);

  drawingContext.shadowBlur =10;
  drawingContext.shadowColor = "lightgray";
  btn1 = ellipse(btxLo, btyLo, b1x, b1y);
  btn2 = ellipse(btxLo, btyLo+100, b1x, b1y);
  btn3 = ellipse(btxLo, btyLo+200, b1x, b1y);
  drawingContext.shadowBlur = 0;
  fill(0);
  textSize(22);
  text(1, btxLo-5, btyLo+7);
  text(2, btxLo-5, btyLo+100+7);
  text(3, btxLo-5, btyLo+200+7);


  if (mouseIsPressed && mouseX > btxLo-35 && mouseX < btxLo-35+b1x && mouseY > btyLo-35 && mouseY < btyLo-35+b1y){
    page = 0;
  }//TDL


  if (page == 0){
    image(FO1, 0, 0);

    if (mouseIsPressed && mouseX > 293 && mouseX < 293+58 && mouseY > 65 && mouseY < 65+58){
      page = 1;
    }//go to FO2
  }//back to main

  if(page == 1){
    image(FO2, 0, 0);

    if (mouseIsPressed && mouseX > 30 && mouseX < 346 && mouseY > 257 && mouseY < 257+153){
      page = 2;
    }//go to FO3
  }

  if(page == 2){
    image(FO3, 0, 0);
    if (mouseIsPressed && mouseX > 52 && mouseX < 341 && mouseY > 341 && mouseY < 341+33){
      page = 3;
    }//go to FO3
  }

  if(page == 3){
    image(FO4, 0, 0);
  }


  if (mouseIsPressed && mouseX > btxLo-35 && mouseX < btxLo-35+b1x && mouseY > btyLo-35+100 && mouseY < btyLo-35+100+b1y){
    page = 10;
  }//TDL

  if(page == 10){
    image(TDL1, 0, 0);
    if (mouseIsPressed && mouseX > 0 && mouseX < 375 && mouseY > 205 && mouseY < 205+128){
      page = 11;
    }
  }

  if(page == 11){
    image(TDL2, 0, 0);
    if (mouseIsPressed && mouseX > 0 && mouseX < 375 && mouseY > 606 && mouseY < 606+61){
      page = 12;
    }
  }

  if(page == 12){
    image(TDL3, 0, 0);
    if (mouseIsPressed && mouseX > 121 && mouseX < 121+66 && mouseY > 104 && mouseY < 104+30){
      page = 13;
    }
  }

  if(page == 13){
    image(TDL4, 0, 0);
    if (mouseIsPressed && mouseX > 24 && mouseX < 24+327 && mouseY > 238 && mouseY < 238+257){
      page = 14;
    }
  }

  if(page == 14){
    image(TDL5, 0, 0);
    if (mouseIsPressed && mouseX > 25 && mouseX < 25+16 && mouseY > 258 && mouseY < 258+16){
      page = 15;
    }
  }

  if(page == 15){
    image(TDL6, 0, 0);
    if (mouseIsPressed && mouseX > 0 && mouseX < 375 && mouseY > 0 && mouseY < 667){
      page = 16;
    }
  }

  if(page == 16){
    image(TDL7, 0, 0);
    if (mouseIsPressed && mouseX > 330 && mouseX < 330+21 && mouseY > 145 && mouseY < 145+15){
      page = 17;
    }
  }

  if(page == 17){
    image(TDL8, 0, 0);
    if (mouseIsPressed && mouseX > 12 && mouseX < 12+46 && mouseY > 167 && mouseY < 167+44){
      page = 18;
    }
  }

  if(page == 18){
    image(TDL9, 0, 0);
  }


  if (mouseIsPressed && mouseX > btxLo-35 && mouseX < btxLo-35+b1x && mouseY > btyLo-35+200 && mouseY < btyLo-35+200+b1y){
    page = 20;
  }//SR1

  if(page == 20){
    image(SR1, 0, 0);
    if (mouseIsPressed && mouseX > 0 && mouseX < 375 && mouseY > 205 && mouseY < 205+128){
      page = 21;
    }
  }

  if(page == 21){
    image(SR2, 0, 0);
    if (mouseIsPressed && mouseX > 330 && mouseX < 330+21 && mouseY > 145 && mouseY < 145+15){
      page = 22;
    }
  }

  if(page == 22){
    image(SR3, 0, 0);
    if (mouseIsPressed && mouseX > 12 && mouseX < 12+46 && mouseY > 167 && mouseY < 167+44){
      page = 23;
    }
  }

  if(page == 23){
    image(SR4, 0, 0);
  }


}
