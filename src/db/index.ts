

import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient()

// /**@return {PrismaClient} */ //Add types to autocompletion
// function createPrismaClient() {
// 	if (!globalThis.prismaClient) {
// 		globalThis.prismaClient = new PrismaClient({});
// 	}
// 	return globalThis.prismaClient;
// }

db.snippet.create({
	data: {
		title: 'Title!',
		code: "function createPrismaClient() {if (!globalThis.prismaClient) {globalThis.prismaClient = new PrismaClient({})}return globalThis.prismaClient}"
	}
})