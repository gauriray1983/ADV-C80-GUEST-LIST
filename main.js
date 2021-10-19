var names_of_guest_array = [];
function submit() {
    var Guest_Name = document.getElementById("Enter_name").value;
	names_of_guest_array.push(Guest_Name);
	document.getElementById("display_name").innerHTML = names_of_the_guest_array;   
    console.log(names_of_the_guest_array);
    var Lenght of name = names_of_guest_array.length;
    console.log(lenght_of_the_array);
}
function show_list() {
	var i = names_of_the_guest_array.join("<br>");
	console.log(names_of_the_guest_array);
	document.getElementById("Show_names").innerHTML = i.toString();	
}
function sorting() {
		names_of_the_guest_array
		var i= names_of_the_guest_array.join("<br>");
		console.log(names_of_the_guest_array);		
		document.getElementById("sorted_name").innerHTML=i.toString();
		}
function searching() {
	var s = document.getElementById("Search_name").value;
	var found = 0;
	var j;
	for(j=0; j<names_of_the_guest_array.length; j++){
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}