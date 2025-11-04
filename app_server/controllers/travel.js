/*GET Travel View*/

const travel = (req, res) => {
    res.render( 'travel', { title: "Travlr Getaweays"});
};

module.exports = {
    travel
}