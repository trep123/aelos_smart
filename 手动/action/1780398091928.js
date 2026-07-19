Blockly.Blocks['1780398091928'] = {
  init: function() {
    this.jsonInit({
      "type": "1780398091928",
      "message0": "蹲放",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780398091928'] = function(block) {
  let code = "MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)\nMOTOsetspeed(65)\nMOTOmove19(65,10,180,85,112,90,115,90,140,190,28,110,107,146,70,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,85,110,139,62,83,140,190,28,115,88,61,138,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,74,145,139,62,74,140,190,28,126,55,61,138,126,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(85,10,180,74,145,139,62,74,120,190,28,126,55,61,138,126,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(85,10,180,108,93,55,124,100,120,190,28,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780398091928'] = function(block) {
  let code = "base_action.action('蹲放')\n";
  return code;
}

