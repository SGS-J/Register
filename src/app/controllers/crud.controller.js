const crudController = {}

crudController.renderCrud = (req, res) => {
   res.render('crud', {username: req.user.username})
}; 

module.exports = crudController