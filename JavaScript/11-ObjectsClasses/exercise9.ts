import { Robot, FlexibleRobot } from "./exercise9-robot";

const robo = new Robot(0,0);
robo.handleMessage("moveN");
robo.handleMessage("moveN");
robo.handleMessage("moveE");
robo.handleMessage("moveE");
robo.handleMessage("moveE");
robo.handleMessage("moveE");

console.log(robo);

const flexRobo = new FlexibleRobot(0,0);
flexRobo.handleMessage("moveNE");
flexRobo.handleMessage("moveNE");
flexRobo.handleMessage("moveE");
flexRobo.handleMessage("moveE");

console.log(flexRobo);
flexRobo.moveToPoint(0,0);
console.log(flexRobo);

