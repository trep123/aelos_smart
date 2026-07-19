Blockly.Blocks['1780378477743'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378477743",
      "message0": "抱方块左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378477743'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(65,10,156,95,71,55,109,95,140,190,50,105,89,145,51,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,95,80,55,109,92,140,190,50,105,81,145,51,108,0,0,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65,10,156,100,91,55,129,100,140,190,50,100,109,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,91,55,129,100,140,190,50,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378477743'] = function(block) {
  let code = "base_action.action('抱方块左转')\n";
  return code;
}

