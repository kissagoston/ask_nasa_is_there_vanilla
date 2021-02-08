const _load = async () => {
	//fetch mindig egy promise objectel tér vissza 
	const data = await fetch(
		"https://api.nasa.gov/planetary/apod?api_key=JZLWuJDR9crbBSjYEFfoziVpdkNQq6FNywPhfzdT"
	)
  .then(response => response.json())
  console.log(data);
	const rootE = document.getElementById("root");
	rootE.insertAdjacentHTML(
		"beforeend", 
		`
		<h1> ${data.title} </h1>
		<img src="${data.url}" />
		<p> ${data.explanation} </p>
	`)
};

window.addEventListener("load", _load);