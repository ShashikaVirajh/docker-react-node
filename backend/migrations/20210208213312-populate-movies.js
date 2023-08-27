module.exports = {
  async up(db, client) {
    await db
      .collection("movies")
      .insertMany([
        { title: "Avatar: The Way of Water" },
        { title: "Transformers: Rise of the Beasts" },
        { title: "Avengers: Endgame" },
        { title: "Extraction 2" },
        { title: "John Wick: Chapter 4" },
      ]);
  },

  async down(db, client) {
    await db.collection("movies").deleteMany({
      title: {
        $in: ["Avatar: The Way of Water", "Transformers: Rise of the Beasts", "Avengers: Endgame", "Extraction 2", 'John Wick: Chapter 4'],
      },
    });
  },
};
