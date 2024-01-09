import { notFound } from "next/navigation";
import { db } from "@/db";
import Link from "next/link";

interface SnippetPageProps {
	params: {
		id: string;
	};
}

export default async function SnippetPage(props: SnippetPageProps) {
	await new Promise((r) => setTimeout(r, 2000));

	const snippet = await db.snippet.findFirst({
		where: {
			id: parseInt(props.params.id),
		},
	});

	if (!snippet) {
		return (
			<div>
				<h1>Sorry this snippet is not valid</h1>
			</div>
		);
	}

	return (
		<div>
			<div className="flex m-4 justify-between items-center">
				<h1 className="text-xl font-bold">{snippet.title}</h1>
				<div className="flex gap-4">
					<Link className="p-2 rounded border" href={`/snippets/${snippet.id}/edit`}>Edit</Link>
					<button className="p-2 rounded border">Delete</button>
				</div>
			</div>
			<pre className="p-3 border rounded bg-gray-200 border-gray-200">
				<code>{snippet.code}</code>
			</pre>
		</div>
	);
}