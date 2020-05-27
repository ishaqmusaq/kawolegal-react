"use script";
		const wordCount = document.querySelector("#word-count");
		const characterCount = document.querySelector("#character-count");
		const text = document.querySelector("#text");
		const charPlural = document.querySelector("#charPlural");
		const wordPlural = document.querySelector("#wordPlural");

		const getCharacterCount = ()=>{
			return text.value.length;
		};

		const getWordCount= ()=>{
			const numWords =text.value.split("").filter(item=>{
				return item != "";
			});
			return numWords.length;
		};
		const setPlural = ()=>{
			wordPlural.style.visibility =
			getWordCount() === 1 ?
			"hidden"  "visible"
			charPlural.style.visibility =
			getCharacterCount () === 1 ?
			"hidden"; "visible";
		};


		const setCounts =()=>{
			wordCount.textContent = getWordCount();
			characterCount.textContent = getCharacterCount();
			setPlural();
		};

		window.addEventListener(
			"input",
               event =>{
               	if(event.target.matches(#text)){
               		setCounts();
               	}
               },
               false,
			);
		setCounts();