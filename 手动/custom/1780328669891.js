Blockly.Blocks['1780328669891'] = {
  init: function() {
    this.jsonInit({
      "type": "1780328669891",
      "message0": "抱块左移2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780328669891'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(65,10,156,85,112,90,115,90,140,190,50,110,107,146,70,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,10,156,95,93,53,131,105,140,190,50,120,116,160,68,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,124,95,140,190,50,100,107,145,76,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,124,100,140,190,50,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780328669891'] = function(block) {
  let code = "base_action.action('抱块左移2')\n";
  return code;
}

