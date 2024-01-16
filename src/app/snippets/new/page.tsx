'use client'

import { useFormState } from "react-dom";
import * as actions from "@/actions/action";

export default function SnippetCreatePage() {
	// async function createSnippet(formData: FormData) {
	// 	// This is a SERVER ACTION!
	// 	'use server'

	// 	//Check the user's inputs and make sure they are valid
	// 	const title = formData.get('title') as string;
	// 	const code = formData.get('code') as string;

	// 	//Create a new record in the database
	// 	const snippet = await db.snippet.create({
	// 		data: {
	// 			title,
	// 			code
	// 		}
	// 	})

	// 	//Redirect the user back to the roo route
	// 	redirect('/')

	// }

	const [formState, action] = useFormState(actions.createSnippet, {
		message: "",
	});

	return (
		<form action={action}>
			<h3 className="font-bold m-3">Create a Snippet</h3>
			<div className="flex flex-col gap-4">
				<div className="flex gap-4">
					<label htmlFor="title" className="w-12">
						Title
					</label>
					<input
						type="text"
						name="title"
						className="border rounded p-2 w-full"
						id="title"
					/>
				</div>

				<div className="flex gap-4">
					<label htmlFor="code" className="w-12">
						Code
					</label>
					<textarea
						name="code"
						className="border rounded p-2 w-full"
						id="code"
					/>
				</div>

				{
					formState.message ? <div className="my-2 p-2 bg-red-200 border rounded roder-red-400">{formState.message}</div> : null
				}

				<button type="submit" className="rounded p-2 bg-blue-200">
					Create
				</button>
			</div>
		</form>
	);
}
