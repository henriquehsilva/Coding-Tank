
let imcCalc = document.getElementById("imcCalc");

imcCalc.addEventListener("submit", (e) => {
	e.preventDefault();

	let weightValue = document.getElementById("weight").value;
	let heightValue = document.getElementById("height").value;

	let weight = parseFloat(weightValue)
	let height = parseFloat(heightValue)

	if ((weight > 0) && (height > 0)) {
		let result = Math.round(weight/Math.pow((height/100), 2));

		document.getElementById("result").innerHTML = `Seu IMC é ${result}`;
	} else {
		alert("Permitido apenas valores maiores que 0.");
	}
  });


