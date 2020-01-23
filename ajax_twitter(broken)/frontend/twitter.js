const FollowToggle = require("./follow_toggle.js");

$(document).ready(function() {
  $('button.follow-toggle').each( (index, ele) => {
    return new FollowToggle(ele);
  });
});