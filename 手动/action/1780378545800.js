Blockly.Blocks['1780378545800'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378545800",
      "message0": "向前撑地起来",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378545800'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 起\nMOTOsetspeed(40)\nMOTOmove19(80,90,101,101,93,57,124,101,131,100,98,102,107,143,77,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(37,92,182,85,64,41,98,99,153,107,19,130,142,160,92,103,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378545800'] = function(block) {
  let code = "base_action.action('向前撑地起来')\n";
  return code;
}

