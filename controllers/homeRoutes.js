const router = require("express").Router()
const { Article, User, Review } = require("../models")
const withAuth = require("../utils/auth")

router.get("/", async (req, res) => {
  try {
    // Get all articles and JOIN with user data
    const articleData = await Article.findAll({
      order: [["date_created", "DESC"]],
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    })

    // Serialize data so the template can read it
    const articles = articleData.map((article) => article.get({ plain: true }))

    // Pass serialized data and session flag into template
    res.render("homepage", {
      articles,
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get("/articles/:id", async (req, res) => {
  try {
    const articleData = await Article.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Review,
          include: [User],
        },
      ],
    })

    const article = articleData.get({ plain: true })
    // const articles = articleData.map((article) => article.get({ plain: true }));

    res.render("articlepage", {
      article,
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// Use withAuth middleware to prevent access to route
router.get("/articles", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Article }],
    })

    const user = userData.get({ plain: true })

    res.render("new-article", {
      ...user,
      logged_in: true,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/articles")
    return
  }

  res.render("signup")
})

module.exports = router
