using UnityEngine;
using System.Collections;

public class objRotate : MonoBehaviour {
	
	public Transform Target;
	public  float speedX = 0f;
	public  float speedY = 0f;
	public  float speedZ = 0f;
	public 	float time;
	private	int count;
	public 	int rate;
		
	// Use this for initialization
	void Start () {
		count = 0;
		
	}
	
	// Update is called once per frame
	void Update () {
		
		if ( Target )
		{
			count++;
			Target.transform.Rotate ( speedX * Time.deltaTime, speedY * Time.deltaTime, speedZ * Time.deltaTime) ;
			time = Time.time;
			if ( count == rate )
			{
				Target.transform.localScale = new Vector3 ( Random.value * 5f  , Random.value * 5f, Random.value * 5f ) ;
				count = 0;
			}
		}
	
	}
}
