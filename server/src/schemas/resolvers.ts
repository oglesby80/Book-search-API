import { User } from '../models/User'; // Adjust path based on your structure
import { Book } from '../models/Book'; // Adjust path based on your structure
import { signToken } from '../services/auth'; // Utility for generating JWT tokens
import { AuthenticationError } from 'apollo-server-express';

const resolvers = {
  Query: {
    // Return the logged-in user's data
    me: async (_parent: any, _args: any, context: any) => {
      if (context.user) {
        try {
          return await User.findById(context.user._id).populate('savedBooks');
        } catch (err) {
          console.error(err);
          throw new Error('Unable to fetch user data');
        }
      }
      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    // User login mutation
    login: async (_parent: any, { email, password }: { email: string; password: string }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Invalid credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    // Add a new user
    addUser: async (_parent: any, { username, email, password }: any) => {
      try {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.error(err);
        throw new Error('Unable to create user');
      }
    },

    // Save a book to the user's account
    saveBook: async (_parent: any, { input }: { input: any }, context: any) => {
      if (context.user) {
        try {
          const updatedUser = await User.findByIdAndUpdate(
            context.user._id,
            { $addToSet: { savedBooks: input } },
            { new: true, runValidators: true }
          ).populate('savedBooks');

          return updatedUser;
        } catch (err) {
          console.error(err);
          throw new Error('Unable to save book');
        }
      }
      throw new AuthenticationError('Not logged in');
    },

    // Remove a book from the user's saved books
    removeBook: async (_parent: any, { bookId }: { bookId: string }, context: any) => {
      if (context.user) {
        try {
          const updatedUser = await User.findByIdAndUpdate(
            context.user._id,
            { $pull: { savedBooks: { bookId } } },
            { new: true }
          ).populate('savedBooks');

          return updatedUser;
        } catch (err) {
          console.error(err);
          throw new Error('Unable to remove book');
        }
      }
      throw new AuthenticationError('Not logged in');
    },
  },
};

export default resolvers;

