import { useEffect } from "react";
import { useState } from "react";

export const QuoteComponent = () => {
	const [quote, setQuote] = useState("");

	useEffect(() => {
		const apiUrl = "https://api.chucknorris.io/jokes/random?category=dev";
		const getQuote = async () => {
			const response = await fetch(apiUrl);
			const data = await response.json();
			setQuote(data.value);
		};
		getQuote();
	}, []);

	return <p>{quote}</p>;
};
