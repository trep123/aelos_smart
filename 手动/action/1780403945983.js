Blockly.Blocks['1780403945983'] = {
  init: function() {
    this.jsonInit({
      "type": "1780403945983",
      "message0": "蹲放1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780403945983'] = function(block) {
  let code = "MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,85,110,139,62,83,140,190,28,115,88,61,138,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,74,145,139,62,74,140,190,28,126,55,61,138,126,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(85,10,180,74,145,139,62,74,120,190,28,126,55,61,138,126,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(85,10,180,108,93,55,124,100,120,190,28,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780403945983'] = function(block) {
  let code = "base_action.action('蹲放1')\n";
  return code;
}

