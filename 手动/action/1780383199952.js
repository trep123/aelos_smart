Blockly.Blocks['1780383199952'] = {
  init: function() {
    this.jsonInit({
      "type": "1780383199952",
      "message0": "test1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780383199952'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,90,55,127,100,140,190,50,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,90,55,127,100,140,190,28,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,102,150,40,100,140,190,28,100,98,50,162,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780383199952'] = function(block) {
  let code = "base_action.action('test1')\n";
  return code;
}

