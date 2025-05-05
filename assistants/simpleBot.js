module.exports = {
  name: "simple-bot",
  description: "A basic assistant that greets and helps the user.",
  process: async ({ input, context }) => {
    if (!input) {
      return { reply: "Hi there! How can I help you today?" };
    }

    const message = input.toLowerCase();

    if (message.includes("price")) {
      return { reply: "Could you please specify the product you're interested in?" };
    } else if (message.includes("help")) {
      return { reply: "Sure! I'm here to help. What do you need assistance with?" };
    } else {
      return { reply: "I'm not sure I understand. Could you rephrase that?" };
    }
  }
};
