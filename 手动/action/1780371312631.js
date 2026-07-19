Blockly.Blocks['1780371312631'] = {
  init: function() {
    this.jsonInit({
      "type": "1780371312631",
      "message0": "举方块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780371312631'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,90,55,127,100,140,190,50,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,90,55,127,100,140,190,28,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780371312631'] = function(block) {
  let code = "base_action.action('举方块')\n";
  return code;
}

