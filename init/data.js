const sampleListings = [
{
  title: "Golden Dune Desert Camp",
  description:
    "A memorable desert stay surrounded by rolling sand dunes, traditional tents, cultural evenings, and magical starry skies.",
  image: {
    url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60",
    filename: "Golden Dune Desert Camp",
  },
  price: 4200,
  location: "Jaisalmer",
  country: "India",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [70.9083, 26.9157],
  },
},

{
  title: "Seaside Pearl Beach Cottage",
  description:
    "A peaceful coastal cottage offering fresh sea air, sandy beaches, comfortable interiors, and relaxing ocean views.",
  image: {
    url: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=800&q=60",
    filename: "Seaside Pearl Beach Cottage",
  },
  price: 6900,
  location: "Gokarna",
  country: "India",
  category: "Beach",
  geometry: {
    type: "Point",
    coordinates: [74.3188, 14.5479],
  },
},

{
  title: "Modern Valley Glass Villa",
  description:
    "A contemporary villa with large glass windows, spacious interiors, private comfort, and stunning views of the valley.",
  image: {
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=60",
    filename: "Modern Valley Glass Villa",
  },
  price: 13800,
  location: "Kasauli",
  country: "India",
  category: "Villa",
  geometry: {
    type: "Point",
    coordinates: [76.9655, 30.8986],
  },
},

{
  title: "Ancient Hilltop Castle Escape",
  description:
    "A remarkable historic escape featuring stone architecture, grand surroundings, scenic hill views, and timeless royal character.",
  image: {
    url: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=800&q=60",
    filename: "Ancient Hilltop Castle Escape",
  },
  price: 13200,
  location: "Chittorgarh",
  country: "India",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [74.6408, 24.8887],
  },
},

{
  title: "Pine Forest Night Camp",
  description:
    "Spend peaceful evenings surrounded by pine trees, warm bonfires, fresh mountain air, and beautiful night skies.",
  image: {
    url: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?auto=format&fit=crop&w=800&q=60",
    filename: "Pine Forest Night Camp",
  },
  price: 2600,
  location: "Tirthan Valley",
  country: "India",
  category: "Camping",
  geometry: {
    type: "Point",
    coordinates: [77.4791, 31.6395],
  },
},

{
  title: "Classic Kolkata Heritage Stay",
  description:
    "A charming urban accommodation near cultural landmarks, historic streets, local food destinations, and vibrant city life.",
  image: {
    url: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=60",
    filename: "Classic Kolkata Heritage Stay",
  },
  price: 5400,
  location: "Kolkata",
  country: "India",
  category: "Iconic Cities",
  geometry: {
    type: "Point",
    coordinates: [88.3639, 22.5726],
  },
},

{
  title: "Himalayan Sunrise Cottage",
  description:
    "Wake up to breathtaking mountain sunrises, peaceful surroundings, cozy interiors, and refreshing Himalayan air.",
  image: {
    url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=800&q=60",
    filename: "Himalayan Sunrise Cottage",
  },
  price: 7200,
  location: "Dharamshala",
  country: "India",
  category: "Mountain City",
  geometry: {
    type: "Point",
    coordinates: [76.3234, 32.2190],
  },
},

{
  title: "Minimalist Comfort Room",
  description:
    "A simple and stylish room offering modern essentials, comfortable bedding, peaceful surroundings, and a pleasant stay.",
  image: {
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=60",
    filename: "Minimalist Comfort Room",
  },
  price: 2700,
  location: "Hyderabad",
  country: "India",
  category: "Rooms",
  geometry: {
    type: "Point",
    coordinates: [78.4867, 17.3850],
  },
},

{
  title: "Hidden Waterfall Nature Retreat",
  description:
    "A beautiful nature escape near flowing waterfalls, lush greenery, peaceful trails, and relaxing surroundings.",
  image: {
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=60",
    filename: "Hidden Waterfall Nature Retreat",
  },
  price: 6100,
  location: "Cherrapunji",
  country: "India",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [91.7362, 25.2702],
  },
},

{
  title: "Coral Bay Beach Residence",
  description:
    "A relaxing beach residence offering beautiful coastal scenery, comfortable rooms, peaceful surroundings, and refreshing ocean breezes.",
  image: {
    url: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=800&q=60",
    filename: "Coral Bay Beach Residence",
  },
  price: 8200,
  location: "Puducherry",
  country: "India",
  category: "Beach",
  geometry: {
    type: "Point",
    coordinates: [79.8083, 11.9416],
  },
},

{
  title: "Garden Courtyard Luxury Villa",
  description:
    "An elegant villa surrounded by lush gardens, spacious rooms, peaceful courtyards, and premium modern amenities.",
  image: {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=60",
    filename: "Garden Courtyard Luxury Villa",
  },
  price: 14600,
  location: "Mysuru",
  country: "India",
  category: "Villa",
  geometry: {
    type: "Point",
    coordinates: [76.6394, 12.2958],
  },
},

{
  title: "Grand Royal Fortress Stay",
  description:
    "Experience a unique stay inspired by royal history, magnificent architecture, grand courtyards, and traditional elegance.",
  image: {
    url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=60",
    filename: "Grand Royal Fortress Stay",
  },
  price: 15500,
  location: "Bikaner",
  country: "India",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [73.3119, 28.0229],
  },
},

{
  title: "Lakeside Bonfire Camping Spot",
  description:
    "Enjoy a peaceful camping experience beside a beautiful lake with bonfires, outdoor activities, and calm natural surroundings.",
  image: {
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60",
    filename: "Lakeside Bonfire Camping Spot",
  },
  price: 3300,
  location: "Pawna Lake",
  country: "India",
  category: "Camping",
  geometry: {
    type: "Point",
    coordinates: [73.5100, 18.6570],
  },
},

{
  title: "Chennai Coastal City Apartment",
  description:
    "A convenient city stay offering modern comfort with easy access to famous attractions, shopping areas, and local experiences.",
  image: {
    url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=60",
    filename: "Chennai Coastal City Apartment",
  },
  price: 5700,
  location: "Chennai",
  country: "India",
  category: "Iconic Cities",
  geometry: {
    type: "Point",
    coordinates: [80.2707, 13.0827],
  },
},

{
  title: "Cloud Valley Mountain Retreat",
  description:
    "A scenic mountain retreat surrounded by clouds, green valleys, peaceful landscapes, and refreshing cool weather.",
  image: {
    url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=60",
    filename: "Cloud Valley Mountain Retreat",
  },
  price: 7900,
  location: "Ooty",
  country: "India",
  category: "Mountain City",
  geometry: {
    type: "Point",
    coordinates: [76.6932, 11.4102],
  },
},

{
  title: "Premium Executive City Room",
  description:
    "A well-designed room offering modern comfort, quality amenities, a relaxing environment, and convenient city access.",
  image: {
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60",
    filename: "Premium Executive City Room",
  },
  price: 3900,
  location: "Ahmedabad",
  country: "India",
  category: "Rooms",
  geometry: {
    type: "Point",
    coordinates: [72.5714, 23.0225],
  },
},

{
  title: "Peaceful Backwater Escape",
  description:
    "A trending waterside getaway surrounded by calm backwaters, green landscapes, traditional beauty, and peaceful experiences.",
  image: {
    url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=60",
    filename: "Peaceful Backwater Escape",
  },
  price: 8400,
  location: "Alappuzha",
  country: "India",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [76.3388, 9.4981],
  },
},

{
  title: "Sunrise Sands Beach Retreat",
  description:
    "Enjoy peaceful mornings by the sea with golden sand, gentle waves, beautiful sunrise views, and relaxing surroundings.",
  image: {
    url: "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?auto=format&fit=crop&w=800&q=60",
    filename: "Sunrise Sands Beach Retreat",
  },
  price: 7300,
  location: "Diu",
  country: "India",
  category: "Beach",
  geometry: {
    type: "Point",
    coordinates: [70.9874, 20.7144],
  },
},

{
  title: "Peaceful Tea Garden Villa",
  description:
    "A beautiful private villa surrounded by green tea gardens, fresh air, scenic landscapes, and comfortable modern interiors.",
  image: {
    url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=60",
    filename: "Peaceful Tea Garden Villa",
  },
  price: 11900,
  location: "Coonoor",
  country: "India",
  category: "Villa",
  geometry: {
    type: "Point",
    coordinates: [76.7959, 11.3530],
  },
},

{
  title: "Historic Desert Citadel Stay",
  description:
    "Stay close to magnificent historic architecture featuring grand walls, traditional design, desert surroundings, and timeless charm.",
  image: {
    url: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&w=800&q=60",
    filename: "Historic Desert Citadel Stay",
  },
  price: 12700,
  location: "Mandawa",
  country: "India",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [75.1487, 28.0547],
  },
},
{
  title: "Azure Coast Beach Escape",
  description:
    "A relaxing beachfront stay with golden sand, clear blue water, refreshing sea breezes, and beautiful sunset views.",
  image: {
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    filename: "Azure Coast Beach Escape",
  },
  price: 5200,
  location: "Goa",
  country: "India",
  category: "Beach",
  geometry: {
    type: "Point",
    coordinates: [73.8278, 15.4909],
  },
},

{
  title: "Royal Hillside Villa",
  description:
    "A luxurious private villa surrounded by peaceful hills, modern interiors, spacious rooms, and scenic natural views.",
  image: {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    filename: "Royal Hillside Villa",
  },
  price: 12500,
  location: "Lonavala",
  country: "India",
  category: "Villa",
  geometry: {
    type: "Point",
    coordinates: [73.4062, 18.7546],
  },
},

{
  title: "Heritage Palace Stay",
  description:
    "Experience royal architecture, historic charm, elegant courtyards, and a memorable stay inspired by India's rich heritage.",
  image: {
    url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
    filename: "Heritage Palace Stay",
  },
  price: 9800,
  location: "Udaipur",
  country: "India",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [73.7125, 24.5854],
  },
},

{
  title: "Cozy Forest Camping Adventure",
  description:
    "Enjoy a peaceful camping experience surrounded by tall trees, fresh air, starry nights, and beautiful natural scenery.",
  image: {
    url: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=800&q=60",
    filename: "Cozy Forest Camping Adventure",
  },
  price: 2800,
  location: "Panchgani",
  country: "India",
  category: "Camping",
  geometry: {
    type: "Point",
    coordinates: [73.7964, 17.9243],
  },
},

{
  title: "Modern Mumbai City Studio",
  description:
    "A stylish and comfortable urban stay located close to famous attractions, restaurants, shopping areas, and city nightlife.",
  image: {
    url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=60",
    filename: "Modern Mumbai City Studio",
  },
  price: 6500,
  location: "Mumbai",
  country: "India",
  category: "Iconic Cities",
  geometry: {
    type: "Point",
    coordinates: [72.8777, 19.0760],
  },
},

{
  title: "Snow Peak Mountain Lodge",
  description:
    "A peaceful mountain retreat offering breathtaking snowy views, cozy interiors, fresh mountain air, and complete relaxation.",
  image: {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    filename: "Snow Peak Mountain Lodge",
  },
  price: 7400,
  location: "Manali",
  country: "India",
  category: "Mountain City",
  geometry: {
    type: "Point",
    coordinates: [77.1892, 32.2432],
  },
},

{
  title: "Elegant Garden View Room",
  description:
    "A bright and comfortable room featuring modern amenities, peaceful surroundings, and a beautiful view of lush gardens.",
  image: {
    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=60",
    filename: "Elegant Garden View Room",
  },
  price: 3200,
  location: "Pune",
  country: "India",
  category: "Rooms",
  geometry: {
    type: "Point",
    coordinates: [73.8567, 18.5204],
  },
},

{
  title: "Lakeside Luxury Hideaway",
  description:
    "A popular luxury retreat offering peaceful lake views, premium comfort, beautiful surroundings, and unforgettable experiences.",
  image: {
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
    filename: "Lakeside Luxury Hideaway",
  },
  price: 8900,
  location: "Nainital",
  country: "India",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [79.4636, 29.3803],
  },
},

{
  title: "Tropical Island Beach House",
  description:
    "Wake up near the ocean in this beautiful tropical beach house with peaceful surroundings and stunning coastal views.",
  image: {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    filename: "Tropical Island Beach House",
  },
  price: 11200,
  location: "Havelock Island",
  country: "India",
  category: "Beach",
  geometry: {
    type: "Point",
    coordinates: [92.9876, 12.0040],
  },
},

{
  title: "Private Infinity Pool Villa",
  description:
    "A premium villa featuring a private infinity pool, elegant interiors, modern comforts, and breathtaking panoramic views.",
  image: {
    url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=800&q=60",
    filename: "Private Infinity Pool Villa",
  },
  price: 18500,
  location: "Alibaug",
  country: "India",
  category: "Villa",
  geometry: {
    type: "Point",
    coordinates: [72.8692, 18.6414],
  },
},

{
  title: "Medieval Stone Castle Retreat",
  description:
    "Stay in a magnificent historic castle surrounded by timeless architecture, grand halls, beautiful landscapes, and royal charm.",
  image: {
    url: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?auto=format&fit=crop&w=800&q=60",
    filename: "Medieval Stone Castle Retreat",
  },
  price: 14500,
  location: "Jodhpur",
  country: "India",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [73.0243, 26.2389],
  },
},

{
  title: "Riverside Tent Camp",
  description:
    "A refreshing riverside camping destination perfect for nature lovers seeking adventure, peaceful evenings, and outdoor experiences.",
  image: {
    url: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=800&q=60",
    filename: "Riverside Tent Camp",
  },
  price: 2400,
  location: "Rishikesh",
  country: "India",
  category: "Camping",
  geometry: {
    type: "Point",
    coordinates: [78.2676, 30.0869],
  },
},

{
  title: "Historic Delhi Urban Stay",
  description:
    "A comfortable city accommodation close to historic landmarks, vibrant markets, cultural attractions, and modern conveniences.",
  image: {
    url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=60",
    filename: "Historic Delhi Urban Stay",
  },
  price: 5800,
  location: "New Delhi",
  country: "India",
  category: "Iconic Cities",
  geometry: {
    type: "Point",
    coordinates: [77.2090, 28.6139],
  },
},

{
  title: "Misty Valley Mountain Cabin",
  description:
    "Escape to a quiet mountain cabin surrounded by misty valleys, green forests, peaceful views, and cool fresh weather.",
  image: {
    url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
    filename: "Misty Valley Mountain Cabin",
  },
  price: 6800,
  location: "Munnar",
  country: "India",
  category: "Mountain City",
  geometry: {
    type: "Point",
    coordinates: [77.0595, 10.0889],
  },
},

{
  title: "Comfortable Downtown Room",
  description:
    "A clean and welcoming room designed for a comfortable stay with essential amenities and convenient access to the city.",
  image: {
    url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=60",
    filename: "Comfortable Downtown Room",
  },
  price: 2900,
  location: "Bengaluru",
  country: "India",
  category: "Rooms",
  geometry: {
    type: "Point",
    coordinates: [77.5946, 12.9716],
  },
},

{
  title: "Sunset Cliffside Retreat",
  description:
    "A stunning destination known for dramatic cliff views, peaceful surroundings, luxury comfort, and spectacular evening sunsets.",
  image: {
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    filename: "Sunset Cliffside Retreat",
  },
  price: 10500,
  location: "Varkala",
  country: "India",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [76.7032, 8.7379],
  },
},

{
  title: "Palm Shore Coastal Escape",
  description:
    "A charming beachside escape surrounded by palm trees, warm sunshine, gentle waves, and peaceful coastal beauty.",
  image: {
    url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=60",
    filename: "Palm Shore Coastal Escape",
  },
  price: 7600,
  location: "Kovalam",
  country: "India",
  category: "Beach",
  geometry: {
    type: "Point",
    coordinates: [76.9780, 8.4004],
  },
},

{
  title: "Luxury Countryside Estate Villa",
  description:
    "A spacious countryside villa offering privacy, elegant design, green surroundings, modern facilities, and complete comfort.",
  image: {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=60",
    filename: "Luxury Countryside Estate Villa",
  },
  price: 15200,
  location: "Mahabaleshwar",
  country: "India",
  category: "Villa",
  geometry: {
    type: "Point",
    coordinates: [73.6572, 17.9237],
  },
},

{
  title: "Royal Fort Heritage Residence",
  description:
    "Discover the beauty of a majestic heritage residence featuring traditional architecture, historic character, and royal hospitality.",
  image: {
    url: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=800&q=60",
    filename: "Royal Fort Heritage Residence",
  },
  price: 11800,
  location: "Jaipur",
  country: "India",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [75.7873, 26.9124],
  },
},

{
  title: "Wild Valley Adventure Camp",
  description:
    "An exciting outdoor camp surrounded by natural landscapes, perfect for hiking, bonfires, adventure activities, and starry nights.",
  image: {
    url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=60",
    filename: "Wild Valley Adventure Camp",
  },
  price: 3100,
  location: "Kasol",
  country: "India",
  category: "Camping",
  geometry: {
    type: "Point",
    coordinates: [77.3153, 32.0100],
  },
},
{
  title: "Emerald Forest Villa Retreat",
  description:
    "A peaceful private villa surrounded by dense greenery, elegant interiors, open spaces, and refreshing natural views.",
  image: {
    url: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=800&q=60",
    filename: "Emerald Forest Villa Retreat",
  },
  price: 13500,
  location: "Wayanad",
  country: "India",
  category: "Villa",
  geometry: {
    type: "Point",
    coordinates: [76.1320, 11.6854],
  },
},

{
  title: "Moonlight Beach Cottage",
  description:
    "A charming coastal cottage offering peaceful evenings, soft sandy shores, gentle sea breezes, and relaxing ocean views.",
  image: {
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
    filename: "Moonlight Beach Cottage",
  },
  price: 7800,
  location: "Mandrem",
  country: "India",
  category: "Beach",
  geometry: {
    type: "Point",
    coordinates: [73.7050, 15.7170],
  },
},

{
  title: "Charming Heritage Room",
  description:
    "A welcoming room combining traditional character with modern comfort, peaceful surroundings, and essential amenities.",
  image: {
    url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=60",
    filename: "Charming Heritage Room",
  },
  price: 3500,
  location: "Kochi",
  country: "India",
  category: "Rooms",
  geometry: {
    type: "Point",
    coordinates: [76.2673, 9.9312],
  },
},

{
  title: "Majestic Amber Palace Escape",
  description:
    "A remarkable heritage stay surrounded by impressive architecture, royal history, spacious courtyards, and timeless beauty.",
  image: {
    url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=60",
    filename: "Majestic Amber Palace Escape",
  },
  price: 16400,
  location: "Amer",
  country: "India",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [75.8513, 26.9855],
  },
},

{
  title: "Starry Hillside Camping Escape",
  description:
    "Experience peaceful outdoor living with comfortable tents, scenic hills, warm campfires, and spectacular star-filled nights.",
  image: {
    url: "https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=800&q=60",
    filename: "Starry Hillside Camping Escape",
  },
  price: 2900,
  location: "Matheran",
  country: "India",
  category: "Camping",
  geometry: {
    type: "Point",
    coordinates: [73.2636, 18.9886],
  },
},

{
  title: "Vibrant Bengaluru City Stay",
  description:
    "A modern accommodation located near popular neighborhoods, restaurants, business areas, and exciting city attractions.",
  image: {
    url: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=60",
    filename: "Vibrant Bengaluru City Stay",
  },
  price: 6200,
  location: "Bengaluru",
  country: "India",
  category: "Iconic Cities",
  geometry: {
    type: "Point",
    coordinates: [77.5946, 12.9716],
  },
},

{
  title: "Alpine Meadow Mountain Lodge",
  description:
    "A cozy retreat surrounded by beautiful mountain meadows, fresh air, peaceful trails, and breathtaking natural scenery.",
  image: {
    url: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=800&q=60",
    filename: "Alpine Meadow Mountain Lodge",
  },
  price: 8300,
  location: "Auli",
  country: "India",
  category: "Mountain City",
  geometry: {
    type: "Point",
    coordinates: [79.6185, 30.5288],
  },
},

{
  title: "Luxury Lakefront Weekend Escape",
  description:
    "A popular destination featuring calm waterfront views, premium comfort, relaxing surroundings, and memorable experiences.",
  image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    filename: "Luxury Lakefront Weekend Escape",
  },
  price: 9600,
  location: "Bhopal",
  country: "India",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [77.4126, 23.2599],
  },
},

{
  title: "Crystal Shore Beach Resort",
  description:
    "Enjoy a refreshing stay beside clear waters, beautiful shores, comfortable spaces, and stunning views of the coastline.",
  image: {
    url: "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=800&q=60",
    filename: "Crystal Shore Beach Resort",
  },
  price: 8600,
  location: "Kanyakumari",
  country: "India",
  category: "Beach",
  geometry: {
    type: "Point",
    coordinates: [77.5385, 8.0883],
  },
},

{
  title: "Contemporary Garden Villa",
  description:
    "A stylish villa offering spacious living areas, beautiful gardens, modern facilities, privacy, and a peaceful atmosphere.",
  image: {
    url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=60",
    filename: "Contemporary Garden Villa",
  },
  price: 14200,
  location: "Nashik",
  country: "India",
  category: "Villa",
  geometry: {
    type: "Point",
    coordinates: [73.7898, 19.9975],
  },
},

{
  title: "Riverside Comfort Suite",
  description:
    "A peaceful and comfortable room near the riverside with modern facilities, relaxing interiors, and beautiful surroundings.",
  image: {
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=60",
    filename: "Riverside Comfort Suite",
  },
  price: 4100,
  location: "Haridwar",
  country: "India",
  category: "Rooms",
  geometry: {
    type: "Point",
    coordinates: [78.1642, 29.9457],
  },
},

{
  title: "Ancient Royal Stone Palace",
  description:
    "Discover historic grandeur through magnificent stone architecture, traditional design, elegant halls, and a royal atmosphere.",
  image: {
    url: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=60",
    filename: "Ancient Royal Stone Palace",
  },
  price: 14900,
  location: "Orchha",
  country: "India",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [78.6419, 25.3519],
  },
},

{
  title: "Green Valley Adventure Camp",
  description:
    "A fun outdoor escape offering tents, nature trails, adventure activities, peaceful valleys, and memorable bonfire evenings.",
  image: {
    url: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?auto=format&fit=crop&w=800&q=60",
    filename: "Green Valley Adventure Camp",
  },
  price: 3200,
  location: "Kodaikanal",
  country: "India",
  category: "Camping",
  geometry: {
    type: "Point",
    coordinates: [77.4892, 10.2381],
  },
},

{
  title: "Timeless Hyderabad Urban Retreat",
  description:
    "A convenient city stay close to famous attractions, historic landmarks, restaurants, shopping destinations, and local culture.",
  image: {
    url: "https://images.unsplash.com/photo-1566552881560-0be862a7c0f8?auto=format&fit=crop&w=800&q=60",
    filename: "Timeless Hyderabad Urban Retreat",
  },
  price: 5900,
  location: "Hyderabad",
  country: "India",
  category: "Iconic Cities",
  geometry: {
    type: "Point",
    coordinates: [78.4867, 17.3850],
  },
},

{
  title: "Snowy Ridge Mountain Home",
  description:
    "A warm mountain home offering spectacular ridge views, cozy interiors, cool weather, and peaceful natural surroundings.",
  image: {
    url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=60",
    filename: "Snowy Ridge Mountain Home",
  },
  price: 8800,
  location: "Gulmarg",
  country: "India",
  category: "Mountain City",
  geometry: {
    type: "Point",
    coordinates: [74.3805, 34.0484],
  },
},

{
  title: "Serene Coastal Wellness Retreat",
  description:
    "A relaxing destination designed for peaceful stays, scenic surroundings, comfortable spaces, and refreshing natural experiences.",
  image: {
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60",
    filename: "Serene Coastal Wellness Retreat",
  },
  price: 9200,
  location: "Mararikulam",
  country: "India",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [76.3030, 9.6098],
  },
},

{
  title: "Golden Coast Ocean Cottage",
  description:
    "A beautiful seaside cottage surrounded by warm sunshine, soft sand, gentle waves, and peaceful coastal landscapes.",
  image: {
    url: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=800&q=60",
    filename: "Golden Coast Ocean Cottage",
  },
  price: 7100,
  location: "Ratnagiri",
  country: "India",
  category: "Beach",
  geometry: {
    type: "Point",
    coordinates: [73.3045, 16.9902],
  },
},

{
  title: "Sunlit Countryside Villa",
  description:
    "A spacious countryside villa with bright interiors, open views, peaceful gardens, and everything needed for a relaxing getaway.",
  image: {
    url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=60",
    filename: "Sunlit Countryside Villa",
  },
  price: 12800,
  location: "Coorg",
  country: "India",
  category: "Villa",
  geometry: {
    type: "Point",
    coordinates: [75.8069, 12.3375],
  },
},

{
  title: "Elegant Metro View Room",
  description:
    "A stylish room offering comfortable furnishings, modern facilities, a peaceful atmosphere, and convenient access to city life.",
  image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    filename: "Elegant Metro View Room",
  },
  price: 3800,
  location: "Nagpur",
  country: "India",
  category: "Rooms",
  geometry: {
    type: "Point",
    coordinates: [79.0882, 21.1458],
  },
},

{
  title: "Royal Lakeside Fortress",
  description:
    "A unique heritage experience combining impressive royal architecture, scenic surroundings, historic beauty, and timeless elegance.",
  image: {
    url: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=60",
    filename: "Royal Lakeside Fortress",
  },
  price: 17200,
  location: "Gwalior",
  country: "India",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [78.1828, 26.2183],
  },
},
{
  title: "Misty Tea Estate Escape",
  description:
    "A peaceful and popular getaway surrounded by rolling tea gardens, misty landscapes, fresh air, and beautiful natural views.",
  image: {
    url: "https://images.unsplash.com/photo-1544639043-ef9f83a0df44?auto=format&fit=crop&w=800&q=60",
    filename: "Misty Tea Estate Escape",
  },
  price: 7600,
  location: "Munnar",
  country: "India",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [77.0595, 10.0889],
  },
},

{
  title: "Ocean Breeze Shore House",
  description:
    "A relaxing coastal stay with beautiful sea views, fresh ocean air, comfortable spaces, and peaceful sandy surroundings.",
  image: {
    url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=60",
    filename: "Ocean Breeze Shore House",
  },
  price: 8300,
  location: "Tarkarli",
  country: "India",
  category: "Beach",
  geometry: {
    type: "Point",
    coordinates: [73.4889, 16.0062],
  },
},

{
  title: "Hillside Private Pool Villa",
  description:
    "A spacious private villa featuring modern interiors, peaceful hills, comfortable living spaces, and a refreshing pool area.",
  image: {
    url: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=800&q=60",
    filename: "Hillside Private Pool Villa",
  },
  price: 16800,
  location: "Igatpuri",
  country: "India",
  category: "Villa",
  geometry: {
    type: "Point",
    coordinates: [73.5626, 19.6954],
  },
},

{
  title: "Quiet Courtyard Guest Room",
  description:
    "A comfortable and peaceful room featuring cozy furnishings, modern essentials, and a relaxing environment for every guest.",
  image: {
    url: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=60",
    filename: "Quiet Courtyard Guest Room",
  },
  price: 3100,
  location: "Indore",
  country: "India",
  category: "Rooms",
  geometry: {
    type: "Point",
    coordinates: [75.8577, 22.7196],
  },
},

{
  title: "Magnificent Rajputana Castle",
  description:
    "A remarkable heritage destination showcasing magnificent architecture, royal halls, historic charm, and unforgettable traditional experiences.",
  image: {
    url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60",
    filename: "Magnificent Rajputana Castle",
  },
  price: 15800,
  location: "Kumbhalgarh",
  country: "India",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [73.5829, 25.1480],
  },
},

{
  title: "Woodland Explorer Camp",
  description:
    "An exciting camping destination surrounded by natural landscapes, open skies, outdoor activities, and peaceful evenings around a campfire.",
  image: {
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    filename: "Woodland Explorer Camp",
  },
  price: 2700,
  location: "Bhandardara",
  country: "India",
  category: "Camping",
  geometry: {
    type: "Point",
    coordinates: [73.7406, 19.5287],
  },
},

{
  title: "Jaipur Cultural City Residence",
  description:
    "A convenient urban stay near colorful markets, historic landmarks, cultural attractions, restaurants, and memorable local experiences.",
  image: {
    url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=60",
    filename: "Jaipur Cultural City Residence",
  },
  price: 6300,
  location: "Jaipur",
  country: "India",
  category: "Iconic Cities",
  geometry: {
    type: "Point",
    coordinates: [75.7873, 26.9124],
  },
},

{
  title: "Evergreen Himalayan Valley Lodge",
  description:
    "A cozy mountain lodge surrounded by green valleys, peaceful trails, fresh air, and breathtaking views of the Himalayas.",
  image: {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
    filename: "Evergreen Himalayan Valley Lodge",
  },
  price: 8500,
  location: "Shimla",
  country: "India",
  category: "Mountain City",
  geometry: {
    type: "Point",
    coordinates: [77.1734, 31.1048],
  },
},

{
  title: "Island Lagoon Hideaway",
  description:
    "A trending island retreat offering calm surroundings, scenic water views, relaxing spaces, and an unforgettable peaceful escape.",
  image: {
    url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=60",
    filename: "Island Lagoon Hideaway",
  },
  price: 10900,
  location: "Lakshadweep",
  country: "India",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [72.6417, 10.5667],
  },
},

{
  title: "Silver Sand Coastal Retreat",
  description:
    "A charming beach retreat surrounded by soft sand, clear water, peaceful coastal scenery, and refreshing sea breezes.",
  image: {
    url: "https://images.unsplash.com/photo-1439130490301-25e322d88054?auto=format&fit=crop&w=800&q=60",
    filename: "Silver Sand Coastal Retreat",
  },
  price: 7400,
  location: "Ganpatipule",
  country: "India",
  category: "Beach",
  geometry: {
    type: "Point",
    coordinates: [73.2670, 17.1420],
  },
},

{
  title: "Elegant Vineyard Estate Villa",
  description:
    "A luxurious villa surrounded by beautiful vineyards, spacious interiors, peaceful outdoor spaces, and modern comfort.",
  image: {
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=60",
    filename: "Elegant Vineyard Estate Villa",
  },
  price: 15400,
  location: "Sula Vineyards",
  country: "India",
  category: "Villa",
  geometry: {
    type: "Point",
    coordinates: [73.7457, 20.0036],
  },
},

{
  title: "Warm Boutique Garden Room",
  description:
    "A stylish and welcoming room with comfortable furnishings, pleasant surroundings, essential facilities, and a peaceful atmosphere.",
  image: {
    url: "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=800&q=60",
    filename: "Warm Boutique Garden Room",
  },
  price: 3600,
  location: "Surat",
  country: "India",
  category: "Rooms",
  geometry: {
    type: "Point",
    coordinates: [72.8311, 21.1702],
  },
},

{
  title: "Hill Fort Royal Residence",
  description:
    "Experience the grandeur of a historic hill fortress with traditional architecture, impressive views, and a timeless royal atmosphere.",
  image: {
    url: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=60",
    filename: "Hill Fort Royal Residence",
  },
  price: 17600,
  location: "Ranthambore",
  country: "India",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [76.4561, 26.0173],
  },
},

{
  title: "Riverbank Wilderness Camp",
  description:
    "A peaceful outdoor camping experience beside a flowing river with scenic surroundings, tents, adventure activities, and evening bonfires.",
  image: {
    url: "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=800&q=60",
    filename: "Riverbank Wilderness Camp",
  },
  price: 3400,
  location: "Dandeli",
  country: "India",
  category: "Camping",
  geometry: {
    type: "Point",
    coordinates: [74.6109, 15.2479],
  },
},

{
  title: "Kolkata Riverside Urban Home",
  description:
    "A comfortable city stay offering easy access to cultural destinations, famous streets, local food, and vibrant urban life.",
  image: {
    url: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=60",
    filename: "Kolkata Riverside Urban Home",
  },
  price: 5600,
  location: "Kolkata",
  country: "India",
  category: "Iconic Cities",
  geometry: {
    type: "Point",
    coordinates: [88.3639, 22.5726],
  },
},

{
  title: "Highland Cloud View Cottage",
  description:
    "A peaceful mountain cottage offering beautiful cloud-covered views, cozy interiors, cool weather, and refreshing natural surroundings.",
  image: {
    url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=60",
    filename: "Highland Cloud View Cottage",
  },
  price: 8100,
  location: "Mussoorie",
  country: "India",
  category: "Mountain City",
  geometry: {
    type: "Point",
    coordinates: [78.0644, 30.4598],
  },
},

{
  title: "Hidden Jungle Waterfall Stay",
  description:
    "A unique nature escape near lush forests and flowing waterfalls, perfect for peaceful relaxation and unforgettable adventures.",
  image: {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60",
    filename: "Hidden Jungle Waterfall Stay",
  },
  price: 6900,
  location: "Agumbe",
  country: "India",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [75.0892, 13.5076],
  },
},

{
  title: "Blue Horizon Beach Villa",
  description:
    "A beautiful coastal villa offering open ocean views, comfortable spaces, peaceful surroundings, and a memorable beachside experience.",
  image: {
    url: "https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=800&q=60",
    filename: "Blue Horizon Beach Villa",
  },
  price: 9800,
  location: "Mahabalipuram",
  country: "India",
  category: "Beach",
  geometry: {
    type: "Point",
    coordinates: [80.1920, 12.6269],
  },
},

{
  title: "Modern Orchard Valley Villa",
  description:
    "A premium private villa surrounded by peaceful orchards, spacious rooms, elegant design, and beautiful natural landscapes.",
  image: {
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=60",
    filename: "Modern Orchard Valley Villa",
  },
  price: 14700,
  location: "Srinagar",
  country: "India",
  category: "Villa",
  geometry: {
    type: "Point",
    coordinates: [74.7973, 34.0837],
  },
},

{
  title: "Heritage Fort View Chamber",
  description:
    "A comfortable room combining heritage-inspired design with modern amenities, peaceful surroundings, and a memorable local experience.",
  image: {
    url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=60",
    filename: "Heritage Fort View Chamber",
  },
  price: 4300,
  location: "Jaisalmer",
  country: "India",
  category: "Rooms",
  geometry: {
    type: "Point",
    coordinates: [70.9083, 26.9157],
  },
},
{
  title: "Sunset Desert Luxury Camp",
  description:
    "A beautiful desert escape featuring luxury tents, peaceful dunes, cultural evenings, warm hospitality, and unforgettable sunset views.",
  image: {
    url: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=800&q=60",
    filename: "Sunset Desert Luxury Camp",
  },
  price: 5800,
  location: "Khimsar",
  country: "India",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [74.1167, 26.6500],
  },
},

{
  title: "Whispering Palm Beach House",
  description:
    "A peaceful beachside house surrounded by palm trees, soft sand, ocean breezes, and relaxing coastal scenery.",
  image: {
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    filename: "Whispering Palm Beach House",
  },
  price: 8900,
  location: "Arambol",
  country: "India",
  category: "Beach",
  geometry: {
    type: "Point",
    coordinates: [73.7045, 15.6857],
  },
},

{
  title: "Peaceful Orchard Private Villa",
  description:
    "A spacious villa surrounded by beautiful greenery, open spaces, modern interiors, and a peaceful private atmosphere.",
  image: {
    url: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=60",
    filename: "Peaceful Orchard Private Villa",
  },
  price: 14300,
  location: "Karjat",
  country: "India",
  category: "Villa",
  geometry: {
    type: "Point",
    coordinates: [73.3230, 18.9107],
  },
},

{
  title: "Cozy Old Town Guest Room",
  description:
    "A comfortable room with warm interiors, essential amenities, peaceful surroundings, and easy access to nearby attractions.",
  image: {
    url: "https://images.unsplash.com/photo-1594563703937-fdc640497dcd?auto=format&fit=crop&w=800&q=60",
    filename: "Cozy Old Town Guest Room",
  },
  price: 3300,
  location: "Amritsar",
  country: "India",
  category: "Rooms",
  geometry: {
    type: "Point",
    coordinates: [74.8723, 31.6340],
  },
},

{
  title: "Ancient Sandstone Royal Fort",
  description:
    "A magnificent heritage destination featuring impressive sandstone architecture, royal halls, historic beauty, and timeless charm.",
  image: {
    url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=60",
    filename: "Ancient Sandstone Royal Fort",
  },
  price: 16900,
  location: "Neemrana",
  country: "India",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [76.3858, 27.9897],
  },
},

{
  title: "Meadow Sunrise Camping Grounds",
  description:
    "Enjoy peaceful mornings in nature with comfortable tents, green meadows, outdoor activities, and relaxing campfire evenings.",
  image: {
    url: "https://images.unsplash.com/photo-1496545672447-f699b503d270?auto=format&fit=crop&w=800&q=60",
    filename: "Meadow Sunrise Camping Grounds",
  },
  price: 3000,
  location: "Sakleshpur",
  country: "India",
  category: "Camping",
  geometry: {
    type: "Point",
    coordinates: [75.7846, 12.9419],
  },
},

{
  title: "Vibrant Pune City Apartment",
  description:
    "A modern city accommodation close to popular restaurants, shopping destinations, cultural attractions, and lively neighborhoods.",
  image: {
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=60",
    filename: "Vibrant Pune City Apartment",
  },
  price: 6100,
  location: "Pune",
  country: "India",
  category: "Iconic Cities",
  geometry: {
    type: "Point",
    coordinates: [73.8567, 18.5204],
  },
},

{
  title: "Quiet Himalayan Ridge Retreat",
  description:
    "A peaceful mountain stay offering panoramic ridge views, refreshing weather, cozy spaces, and beautiful natural surroundings.",
  image: {
    url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=800&q=60",
    filename: "Quiet Himalayan Ridge Retreat",
  },
  price: 8700,
  location: "Tawang",
  country: "India",
  category: "Mountain City",
  geometry: {
    type: "Point",
    coordinates: [91.8650, 27.5861],
  },
},

{
  title: "Hidden Lakeside Nature Escape",
  description:
    "A trending retreat surrounded by calm waters, natural landscapes, peaceful views, and comfortable spaces for relaxation.",
  image: {
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
    filename: "Hidden Lakeside Nature Escape",
  },
  price: 7200,
  location: "Lonar",
  country: "India",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [76.5080, 19.9770],
  },
},

{
  title: "Turquoise Bay Coastal Cottage",
  description:
    "A charming coastal cottage offering refreshing sea views, peaceful sandy surroundings, comfortable interiors, and relaxing evenings.",
  image: {
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60",
    filename: "Turquoise Bay Coastal Cottage",
  },
  price: 8100,
  location: "Bekal",
  country: "India",
  category: "Beach",
  geometry: {
    type: "Point",
    coordinates: [75.0279, 12.3922],
  },
},

{
  title: "Grand Hillside Family Villa",
  description:
    "A premium hillside villa with spacious living areas, beautiful views, private comfort, and modern amenities for a relaxing stay.",
  image: {
    url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=60",
    filename: "Grand Hillside Family Villa",
  },
  price: 15700,
  location: "Lavasa",
  country: "India",
  category: "Villa",
  geometry: {
    type: "Point",
    coordinates: [73.5065, 18.4074],
  },
},

{
  title: "Modern Riverside Deluxe Room",
  description:
    "A bright and comfortable room offering modern facilities, elegant furnishings, peaceful surroundings, and a pleasant stay.",
  image: {
    url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
    filename: "Modern Riverside Deluxe Room",
  },
  price: 4200,
  location: "Varanasi",
  country: "India",
  category: "Rooms",
  geometry: {
    type: "Point",
    coordinates: [82.9739, 25.3176],
  },
},

{
  title: "Majestic Mountain Stone Fortress",
  description:
    "Discover historic grandeur in a magnificent stone fortress surrounded by dramatic landscapes, heritage architecture, and royal charm.",
  image: {
    url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=60",
    filename: "Majestic Mountain Stone Fortress",
  },
  price: 18100,
  location: "Kangra",
  country: "India",
  category: "Castles",
  geometry: {
    type: "Point",
    coordinates: [76.2640, 32.0990],
  },
},

{
  title: "Hilltop Bonfire Adventure Camp",
  description:
    "A memorable outdoor adventure with scenic hill views, comfortable tents, exciting activities, warm bonfires, and starry nights.",
  image: {
    url: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=800&q=60",
    filename: "Hilltop Bonfire Adventure Camp",
  },
  price: 3500,
  location: "Chikmagalur",
  country: "India",
  category: "Camping",
  geometry: {
    type: "Point",
    coordinates: [75.7720, 13.3153],
  },
},

{
  title: "Historic Mysuru City Residence",
  description:
    "A comfortable city stay near famous landmarks, cultural attractions, local markets, restaurants, and historic experiences.",
  image: {
    url: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=60",
    filename: "Historic Mysuru City Residence",
  },
  price: 5500,
  location: "Mysuru",
  country: "India",
  category: "Iconic Cities",
  geometry: {
    type: "Point",
    coordinates: [76.6394, 12.2958],
  },
},

{
  title: "Misty Highland Valley Cabin",
  description:
    "A cozy mountain cabin surrounded by misty valleys, peaceful forests, cool weather, and breathtaking natural scenery.",
  image: {
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60",
    filename: "Misty Highland Valley Cabin",
  },
  price: 8400,
  location: "Lachung",
  country: "India",
  category: "Mountain City",
  geometry: {
    type: "Point",
    coordinates: [88.7435, 27.6876],
  },
},

{
  title: "Scenic Cliffside Eco Retreat",
  description:
    "A popular nature getaway offering dramatic views, peaceful surroundings, sustainable comfort, and unforgettable outdoor experiences.",
  image: {
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60",
    filename: "Scenic Cliffside Eco Retreat",
  },
  price: 9300,
  location: "Mawlynnong",
  country: "India",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [91.9178, 25.2070],
  },
},

{
  title: "Golden Waves Beach Bungalow",
  description:
    "A relaxing beach bungalow surrounded by golden shores, gentle waves, warm sunshine, and peaceful coastal beauty.",
  image: {
    url: "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?auto=format&fit=crop&w=800&q=60",
    filename: "Golden Waves Beach Bungalow",
  },
  price: 8500,
  location: "Mandvi",
  country: "India",
  category: "Beach",
  geometry: {
    type: "Point",
    coordinates: [69.3592, 22.8324],
  },
},

{
  title: "Luxury Rainforest Pool Villa",
  description:
    "A private luxury villa surrounded by lush rainforest, featuring elegant interiors, relaxing spaces, and premium comfort.",
  image: {
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=60",
    filename: "Luxury Rainforest Pool Villa",
  },
  price: 17400,
  location: "Thekkady",
  country: "India",
  category: "Villa",
  geometry: {
    type: "Point",
    coordinates: [77.1600, 9.6031],
  },
},

{
  title: "Quiet Garden Balcony Room",
  description:
    "A peaceful and comfortable room featuring a private balcony, garden views, modern essentials, and a relaxing atmosphere.",
  image: {
    url: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=800&q=60",
    filename: "Quiet Garden Balcony Room",
  },
  price: 3700,
  location: "Aurangabad",
  country: "India",
  category: "Rooms",
  geometry: {
    type: "Point",
    coordinates: [75.3433, 19.8762],
  },
},

]
module.exports = { data: sampleListings };