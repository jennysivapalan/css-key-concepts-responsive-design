const cats = [
  {
    name: "Little Miss Purrfect",
    species: "Cat",
    favFoods: ["wet food", "dry food"],
    birthYear: 2016,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
  },
  {
    name: "Mr Gwumpy",
    species: "Cat",
    favFoods: ["caviar"],
    birthYear: 2016,
    photo:
      "https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg",
  },
  {
    name: "Dopey",
    species: "Cat",
    favFoods: ["bugs"],
    birthYear: 2018,
    photo:
      "https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1",
  },
  {
    name: "Jumpy",
    species: "Scaredy Cat",
    favFoods: ["not cucumbers!"],
    birthYear: 2008,
    photo: "https://i.ytimg.com/vi/eX2qFMC8cFo/maxresdefault.jpg",
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg",
  },
  {
    name: "Cindy Clawford",
    species: "Cat",
    favFoods: ["mice"],
    birthYear: 2012,
    photo:
      "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
  },
  {
    name: "Katy Purry",
    species: "Cat",
    favFoods: ["cigarettes", "coffee"],
    birthYear: 2015,
    photo:
      "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1183822926.jpg",
  },
  {
    name: "Dr. Von Belly-Rub",
    species: "Cat",
    favFoods: ["salt"],
    birthYear: 2020,
    photo:
      "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
  {
    name: "Blobby",
    species: "Bird?",
    favFoods: ["your soul"],
    birthYear: 2020,
    photo:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f27aad30-69c9-42d9-af7b-5c99f2ade8e2/dfhcn48-8c4908ff-4382-48fe-aaee-f5fca3fcb421.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YyN2FhZDMwLTY5YzktNDJkOS1hZjdiLTVjOTlmMmFkZThlMlwvZGZoY240OC04YzQ5MDhmZi00MzgyLTQ4ZmUtYWFlZS1mNWZjYTNmY2I0MjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.C1sis2j3C2nD4mAMcvLOpBt_DAen-hpgUiT06tOidfA",
  },
  {
    name: "El Taco",
    species: "Cat",
    favFoods: ["tequila", "bar snax"],
    birthYear: 1995,
    photo: "https://i.imgflip.com/mh1vd.jpg",
  },
  {
    name: "Nibbles",
    species: "Hungry Cat",
    favFoods: ["blankets", "feet", "tinsel"],
    birthYear: 2003,
    photo:
      "https://i.pinimg.com/736x/1b/ef/b5/1befb5723f54627768e1d77642ca4d45.jpg",
  },
  {
    name: "BoopySnoot",
    species: "Tiny Cat",
    favFoods: ["milk"],
    birthYear: 2021,
    photo:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Tiger",
    species: "Fearsome Cat",
    favFoods: ["anything that moves", "anything else"],
    birthYear: 2020,
    photo:
      "https://static.onecms.io/wp-content/uploads/sites/47/2021/04/13/kitten-pounce-158906394-2000.jpg",
  },
  {
    name: "Smushi",
    species: "Sushi Cat",
    favFoods: ["ramen"],
    birthYear: 2000,
    photo:
      "https://www.mythirtyspot.com/wp-content/uploads/2014/09/Screen-Shot-2014-09-18-at-10.19.29-PM-1024x712.png",
  },
  {
    name: "Doughnut",
    species: "Party Cat",
    favFoods: ["mushrooms"],
    birthYear: 2014,
    photo:
      "https://rlv.zcache.co.uk/doughnut_cat_pet_cat_kitten_cat_cute_cats_postcard-rdef91d9c144140c5b6ac0b9516085db9_ucbjp_540.jpg",
  },
  {
    name: "Blep",
    species: "Cat",
    favFoods: ["baked bean juice"],
    birthYear: 2016,
    photo:
      "https://metro.co.uk/wp-content/uploads/2020/05/PRI_150473631-e1588316954238.jpg?quality=90&strip=all",
  },
];

(function () {
  const petNames = document.getElementsByClassName("cat-name");
  const petImage = document.getElementsByClassName("pet-pic");
  const favFoods = document.getElementsByClassName("fav-foods");
  const birthYear = document.getElementsByClassName("birth-year");
  const species = document.getElementsByClassName("species");

  for (let i = 0; i < cats.length; i++) {
    petNames[i].innerText = cats[i].name;
    petImage[i].src = cats[i].photo;
    favFoods[i].innerText = `Favourite foods: ${cats[i].favFoods
      .map((food) => food)
      .join(", ")}`;
    birthYear[i].innerText = `Birth Year: ${cats[i].birthYear}`;
    species[i].innerText = `Species: ${cats[i].species}`;
  }
})();
