Blockly.Blocks['1780327701460'] = {
  init: function() {
    this.jsonInit({
      "type": "1780327701460",
      "message0": "捡方块2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780327701460'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,30,156,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,156,100,113,90,109,100,120,170,50,100,87,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,156,100,136,150,62,100,120,170,50,100,72,50,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,156,100,149,150,67,100,120,170,50,100,52,50,133,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,10,156,100,149,150,67,100,140,190,50,100,52,50,133,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,100,104,132,70,100,140,190,50,100,93,69,130,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,90,55,127,100,140,190,50,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780327701460'] = function(block) {
  let code = "base_action.action('捡方块2')\n";
  return code;
}

