class HomeController {
    home(req,res) {
        res.render('home', {title: "Home"})
    }

}

module.exports = new HomeController();