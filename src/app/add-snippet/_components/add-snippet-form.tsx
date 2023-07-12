"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { addSnippetAction } from "../actions";

const snippetLangs = [
	{ name: "C/C++" },
	{ name: "C#" },
	{ name: "Go" },
	{ name: "HTML" },
	{ name: "Java" },
	{ name: "Javascript" },
	{ name: "PHP" },
	{ name: "Python" },
	{ name: "Ruby" },
	{ name: "Swift" },
	{ name: "Typescript" },
];

export default function AddSnippetForm({}) {
	const [codeSnippet, setCodeSnippet] = useState("");
	const [codeLanguage, setCodeLanguage] = useState("");

	async function handleSubmit(e: any) {
		e.preventDefault();
		// console.log("language: ", codeLanguage);
		// console.log("snippet: ", codeSnippet);

		await addSnippetAction({
			language: codeLanguage,
			code: codeSnippet,
		});

		resetFields();
	}
	function resetFields() {
		setCodeSnippet("");
		setCodeLanguage("");
	}
	return (
		<form
			onSubmit={handleSubmit}
			action=""
			className="mt-5 flex flex-col gap-3"
		>
			<div>
				<select
					onChange={(e) => setCodeLanguage(e.target.value)}
					className="py-3 px-4 w-full"
					name=""
					id=""
				>
					<option value="select">Select Snippet Language</option>
					{snippetLangs.map((lang) => (
						<option value={lang.name.toLowerCase()} key={lang.name}>
							{lang.name}
						</option>
					))}
				</select>
			</div>
			<div>
				<textarea
					onChange={(e) => setCodeSnippet(e.target.value)}
					name=""
					value={codeSnippet}
					id=""
					rows={8}
					className="border border-gray-500 p-2 w-full"
				></textarea>
			</div>
			<Button className="w-fit">Upload</Button>
		</form>
	);
}