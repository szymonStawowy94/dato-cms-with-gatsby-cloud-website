'use strict';
module.exports = async client => {
	const previewModel = await client.itemTypes.create({
		name: 'Gatsby preview',
		apiKey: 'gatsby_preview',
	});

	const itemTypeId = 'gatsby_preview';
	const gatsbypreview = await client.fields.create(itemTypeId, {
		label: 'Gatsby Preview',
		fieldType: 'json',
		apiKey: 'gatsbypreview',
		validators: {},
		appearance: {
			addons: [],
			editor: '20195',
			parameters: {},
		},
		defaultValue: null,
	});
};
