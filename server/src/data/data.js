// var crypto = require('crypto');

// To generate unique ID
// const genrateID = () => crypto.randomBytes(20).toString('hex');

const data = {
	products: [
		{
			id: '1',
			productName: 'Camera',
			price: 22000,
			disp:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			rating: 4,
			smallImage:
				'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&h=425&w=640',
			bigImage:
				'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
			reviews: [
				{
					userName: 'testUser1',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser2',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser3',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser4',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
			],
		},
		{
			id: '2',
			productName: 'Tea',
			price: 200,
			disp:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			rating: 4,
			smallImage:
				'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&h=425&w=640',
			bigImage:
				'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
			reviews: [
				{
					userName: 'testUser1',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser2',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser3',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser4',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
			],
		},
		{
			id: '3',
			productName: 'Coffee',
			price: 550,
			disp:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			rating: 4,
			smallImage:
				'https://images.pexels.com/photos/1170659/pexels-photo-1170659.jpeg?auto=compress&cs=tinysrgb&h=425&w=640',
			bigImage:
				'https://images.pexels.com/photos/1170659/pexels-photo-1170659.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
			reviews: [
				{
					userName: 'testUser1',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser2',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser3',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser4',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
			],
		},
		{
			id: '4',
			productName: 'Phone',
			price: 55000,
			disp:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			rating: 4,
			smallImage:
				'https://images.pexels.com/photos/1194760/pexels-photo-1194760.jpeg?auto=compress&cs=tinysrgb&h=425&w=640',
			bigImage:
				'https://images.pexels.com/photos/1194760/pexels-photo-1194760.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
			reviews: [
				{
					userName: 'testUser1',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser2',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser3',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser4',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
			],
		},
		{
			id: '5',
			productName: 'Laptop',
			price: 55000,
			disp:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			rating: 4,
			smallImage:
				'https://images.pexels.com/photos/955405/pexels-photo-955405.jpeg?auto=compress&cs=tinysrgb&h=425&w=640',
			bigImage:
				'https://images.pexels.com/photos/955405/pexels-photo-955405.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
			reviews: [
				{
					userName: 'testUser1',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser2',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser3',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser4',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
			],
		},
		{
			id: '6',
			productName: 'Headphone',
			price: 8200,
			disp:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			rating: 4,
			smallImage:
				'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&h=425&w=640',
			bigImage:
				'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
			reviews: [
				{
					userName: 'testUser1',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser2',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser3',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser4',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
			],
		},
		{
			id: '7',
			productName: 'Candle',
			price: 340,
			disp:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			rating: 4,
			smallImage:
				'https://images.pexels.com/photos/63507/pexels-photo-63507.jpeg?auto=compress&cs=tinysrgb&h=425&w=640',
			bigImage:
				'https://images.pexels.com/photos/63507/pexels-photo-63507.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
			reviews: [
				{
					userName: 'testUser1',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser2',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser3',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser4',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
			],
		},
		{
			id: '8',
			productName: 'Candle',
			price: 140,
			disp:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			rating: 4,
			smallImage:
				'https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg?auto=compress&cs=tinysrgb&h=425&w=640',
			bigImage:
				'https://images.pexels.com/photos/278549/pexels-photo-278549.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
			reviews: [
				{
					userName: 'testUser1',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser2',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser3',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser4',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
			],
		},
		{
			id: '9',
			productName: 'Eve Shadow',
			price: 1500,
			disp:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			rating: 4,
			smallImage:
				'https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg?auto=compress&cs=tinysrgb&h=425&w=640',
			bigImage:
				'https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
			reviews: [
				{
					userName: 'testUser1',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser2',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser3',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser4',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
			],
		},
		{
			id: '10',
			productName: 'Belt',
			price: 450,
			disp:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			rating: 4,
			smallImage:
				'https://images.pexels.com/photos/579987/pexels-photo-579987.jpeg?auto=compress&cs=tinysrgb&h=425&w=640',
			bigImage:
				'https://images.pexels.com/photos/579987/pexels-photo-579987.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
			reviews: [
				{
					userName: 'testUser1',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser2',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser3',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser4',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
			],
		},
		{
			id: '11',
			productName: 'Wallet',
			price: 250,
			disp:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			rating: 4,
			smallImage:
				'https://images.pexels.com/photos/4452398/pexels-photo-4452398.jpeg?auto=compress&cs=tinysrgb&h=425&w=640',
			bigImage:
				'https://images.pexels.com/photos/4452398/pexels-photo-4452398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			reviews: [
				{
					userName: 'testUser1',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser2',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser3',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser4',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
			],
		},
		{
			id: '12',
			productName: 'Watch',
			price: 2300,
			disp:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			rating: 4,
			smallImage:
				'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&h=425&w=640',
			bigImage:
				'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
			reviews: [
				{
					userName: 'testUser1',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser2',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser3',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
				{
					userName: 'testUser4',
					review:
						' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					helpFullCount: 0,
					incorrectCount: 0,
				},
			],
		},
	],
};

module.exports = data;
