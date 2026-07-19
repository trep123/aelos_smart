import sys
sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")

from leju import *

leju_variable_key = None



def main():
    nodes.node_initial()
    try:


        while True:
            leju_variable_key = get_key.key()
            if leju_variable_key == 193:
                base_action.action('抱方块3')
            if leju_variable_key == 246:
                base_action.action('举方块1')
            if leju_variable_key == 244:
                base_action.action('蹲放')
            if leju_variable_key == 195:
                base_action.action('放方块3')
            if leju_variable_key == 196:
                base_action.action('抱方块左移')
            if leju_variable_key == 194:
                base_action.action('抱方块右移')
            if leju_variable_key == 198:
                if leju_variable_key == 198:
                    break
                base_action.action('抬方块前进')
            while leju_variable_key == 199:
                base_action.action('抬方块后退')
            if leju_variable_key == 197:
                base_action.action('抬方块左转')
            if leju_variable_key == 200:
                base_action.action('抬方块右转')
            if leju_variable_key == 243:
                base_action.action('向前撑地起来')
            if leju_variable_key == 245:
                base_action.action('向后倒地起来')
            if leju_variable_key == 201:
                base_action.action('上台阶1')
            if leju_variable_key == 203:
                base_action.action('向前翻滚')
            if leju_variable_key == 205:
                base_action.action('抱起10cm方块')
            if leju_variable_key == 202:
                base_action.action('放下10cm方块')
            if leju_variable_key == 207:
                base_action.action('抱10cm方块前进')
            if leju_variable_key == 220:
                base_action.action('抱10cm方块后退')
            if leju_variable_key == 206:
                base_action.action('抱10cm方块左移')

    except Exception as e:
        nodes.serror(e)
        exit(2)
    finally:
        nodes.finishsend()
if __name__ == "__main__":
    print ("Run custom project")
    main()
