const Query = {
  dogs(parent, args, ctx, info) {
    return [{ name: "Snickers" }, { name: "Monty" }];
  }
};

module.exports = Query;
