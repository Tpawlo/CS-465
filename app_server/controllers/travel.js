var fs = require('fs');
var trips = JSON.parse(fs.readFileSync(__dirname + '/../data/trips.json',
'utf8'));



/*GET Travel View*/

const travel = (req, res) => {
    res.render( 'travel', { title: 'Travlr Getaways', trips});
};

module.exports = {
    travel
}