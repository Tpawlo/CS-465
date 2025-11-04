/*GET Homepage*/

const index = (req, res) => {
    res.render( 'index', { title: "Travlr Getaweays"});
};

module.exports = {
    index
}