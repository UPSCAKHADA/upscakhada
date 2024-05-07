import { tags } from '../constants/tags';

export function parseUrlAndAddTags(path: string | null) {
	console.log("from utils ", path);
	const urlParts = path ? path.split("/") : "";
	if (urlParts[1] !== "_next") {
		console.log(urlParts[1]);
		let tag

		switch (urlParts[1]) {
			case 'aboutus':
				tag = tags.find((item: any) => item.level_1 === 'aboutus');
				if (tag) return tag.tags
			case 'blogs':
				tag = tags.find((item: any) => item.level_1 === 'blogs');
				if (tag) return tag.tags
		}

	}
}
