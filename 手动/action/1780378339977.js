Blockly.Blocks['1780378339977'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378339977",
      "message0": "抱方块向前慢速移动",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378339977'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,90,91,48,134,88,140,190,50,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,86,123,95,115,90,140,190,50,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,86,121,37,161,88,140,190,50,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,107,98,56,129,111,140,190,50,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,106,93,54,128,113,140,190,50,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,106,91,54,128,111,140,190,50,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,88,69,45,112,90,140,190,50,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,86,123,95,115,90,140,190,50,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,91,55,129,100,140,190,50,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378339977'] = function(block) {
  let code = "base_action.action('抱方块向前慢速移动')\n";
  return code;
}

