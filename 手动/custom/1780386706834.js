Blockly.Blocks['1780386706834'] = {
  init: function() {
    this.jsonInit({
      "type": "1780386706834",
      "message0": "抬方块后退",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780386706834'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(15)\nMOTOmove19(65,10,180,100,93,55,124,100,140,190,28,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,90,91,48,129,88,140,190,28,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(65,10,180,86,90,95,84,90,140,190,28,94,107,146,78,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(65,10,180,88,71,53,105,85,140,190,28,93,100,144,79,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,106,93,53,124,111,140,190,28,114,87,163,42,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,106,95,53,122,113,140,190,28,114,110,105,114,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,107,100,56,121,109,140,190,28,112,129,147,95,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,86,113,37,158,90,140,190,28,94,107,147,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(65,10,180,86,110,95,100,90,140,190,28,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,90,91,48,129,88,140,190,28,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,100,93,55,124,100,140,190,28,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780386706834'] = function(block) {
  let code = "base_action.action('抬方块后退')\n";
  return code;
}

