exports.area = function(width) { return width * width; };
exports.perimeter = function(width) { return 4 * width; };

/*using single export assignment
module.exports = {
  area: function(width) {
    return width * width;
  },
       
  perimeter: function(width) {
    return 4 * width;
  }
};
*/