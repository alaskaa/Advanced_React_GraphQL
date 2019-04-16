const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO - check if they are loggin in

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );

    return item;
  }

  // createDog(parent, args, ctx, info) {
  //   // createDog
  //   console.log(args);
  // }
};

module.exports = Mutations;
