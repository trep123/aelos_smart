Blockly.Blocks['1780398237174'] = {
  init: function() {
    this.jsonInit({
      "type": "1780398237174",
      "message0": "抱方块左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780398237174'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(65,10,180,85,112,90,115,90,140,190,28,110,107,146,70,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,10,180,95,93,53,131,105,140,190,28,120,116,160,68,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,10,180,100,93,54,134,98,140,190,28,103,107,146,76,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,100,93,55,134,95,140,190,28,100,107,145,76,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,100,93,55,134,100,140,190,28,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780398237174'] = function(block) {
  let code = "base_action.action('抱方块左移')\n";
  return code;
}

