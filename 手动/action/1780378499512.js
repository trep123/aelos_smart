Blockly.Blocks['1780378499512'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378499512",
      "message0": "抱方块右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378499512'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(65,10,156,95,110,55,149,95,140,190,50,105,130,145,91,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,95,118,55,149,92,140,190,50,105,121,145,91,108,0,0,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65,10,156,100,90,55,129,100,140,190,50,100,110,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,90,55,129,100,140,190,50,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378499512'] = function(block) {
  let code = "base_action.action('抱方块右转')\n";
  return code;
}

