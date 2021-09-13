const User = require("./User")
const Article = require("./Article")
const Review = require("./Review")

User.hasMany(Article, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
})

Article.belongsTo(User, {
  foreignKey: "user_id",
})

Review.belongsTo(User, {
  foreignKey: "user_id",
})

Review.belongsTo(Article, {
  foreignKey: "article_id",
})

Article.hasMany(Review, {
  foreignKey: "article_id",
})

User.hasMany(Review, {
  foreignKey: "user_id",
})

module.exports = { User, Article, Review }
