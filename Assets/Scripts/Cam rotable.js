var target : Transform; //What to rotate around
var distance = 5.0; //How far away to orbit
var xSpeed = 125.0; //X sensitivity
var ySpeed = 50.0; //Y sensitivity

private var x = 0.0; //Angle of the y rotation?
private var y = 0.0; //Angle of the x rotation?

@script AddComponentMenu("Scripts/Mouse Orbit") //Add to menu

function Start() {
    //Initialize the angles
    var angles = transform.eulerAngles;
    x = angles.y;
    y = angles.x;
}

function LateUpdate() { //Every frame, do this as late as you can
    if (target) {//There's a target
        //Change the angles by the mouse movement
        x += Input.GetAxis("Mouse X") * xSpeed * 0.02;
        y -= Input.GetAxis("Mouse Y") * ySpeed * 0.02;

        //Rotate the camera to those angles 
        var rotation = Quaternion.Euler(y, x, 0);
        transform.rotation = rotation;

        //Move the camera to look at the target
        var position = rotation * Vector3(0.0, 0.0, -distance) + target.position;
        transform.position = position;
    }
}