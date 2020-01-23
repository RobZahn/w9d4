const APIUtil = require("./api_util");

class FollowToggle {
  
  constructor (el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === "followed"){
      this.$el.attr("disabled", false);
      this.$el.text("Unfollow!");
    }
    else if (this.followState === "unfollowed"){
      this.$el.attr("disabled", false);
      this.$el.text("Follow!");
    }
    else if (this.followState === "following" || this.followState === "unfollowing"){
      this.$el.attr("disabled", true);
    }
  }

  handleClick() {
    this.$el.on("click", e => {
      event.preventDefault();

      if (this.followState === "followed"){
        this.followState = "following";
        this.render();
        APIUtil.unfollowUser(this.userId).then(() =>{
          this.followState = "unfollowed";
          this.render();
        });
      }
      else {
        this.followState = "unfollowing";
        this.render();
        APIUtil.followUser(this.userId).then(() => {
          this.followState = "followed";
          this.render();
        });
      }
    });

  }
}




module.exports = FollowToggle;