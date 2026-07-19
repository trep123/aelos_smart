Blockly.Blocks['1780396598540'] = {
  init: function() {
    this.jsonInit({
      "type": "1780396598540",
      "message0": "下批",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780396598540'] = function(block) {
  let code = "MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)\nMOTOsetspeed(10)\nMOTOmove19(103,39,180,74,145,139,62,74,97,161,28,126,55,61,138,126,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(80,30,180,108,93,55,124,100,120,170,28,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780396598540'] = function(block) {
  let code = "base_action.action('下批')\n";
  return code;
}

