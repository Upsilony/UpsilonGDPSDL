/**
 * Numbers of decimal digits to round to
 */
 const scale = 2;

 /**
  * Calculate the score awarded when having a certain percentage on a list level
  * @param {Number} rank Position on the list
  * @param {Number} percent Percentage of completion
  * @param {Number} minPercent Minimum percentage required
  * @returns {Number}
  */
 export function score(rank, percent, minPercent) {
     if (rank === null || rank > 150) {
         return 0;
     }
     if (rank > 75 && percent < 100) {
        return 0;
    }
     let maximum_points = 250; //change this to change points of top 1
     let score = ((140 * maximum_points + 7000) / Math.sqrt(3157 * (rank - 1) + 19600) - 50) *
         ((percent - (minPercent - 1)) / (percent - (minPercent - 1)));
 
     score = Math.max(0, score);
     if (isNaN(score)) {
         score = 0;
     }
 
     if (percent != 100) { score = (score * Math.pow(5, ((percent - minPercent) / (100 - minPercent)))) / 10; }
    return Number(score.toFixed(2));
 
     return round(score);
 }
 
 export function round(num) {
     if (!('' + num).includes('e')) {
         return +(Math.round(num + 'e+' + scale) + 'e-' + scale);
     } else {
         var arr = ('' + num).split('e');
         var sig = '';
         if (+arr[1] + scale > 0) {
             sig = '+';
         }
         return +(
             Math.round(+arr[0] + 'e' + sig + (+arr[1] + scale)) +
             'e-' +
             scale
         );
     }
 }
 