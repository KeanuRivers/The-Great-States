// will have to change instances of 'myth' and 'state' will record on line 2
// 3, 
const { myth, state } = require('../models')

const resolvers = {
    Query: {
        myth: async()=> {
            return myth.findOne({ _id: mythId })
        },
        
        myth: async (parent, { mythId })=> {
            return myth.findOne({_id: mythId})
        }   
}, 

Mutation: {
    addMyth: async (parent, {mythText}) => {
        return myth.create({ mythText});
    },
},
    removeMyth: async (parent, { mythId }) => {
        return Thought.findOneAndDelete({ _id: mythId});
},
    addComment: async (parent, { mythId, commentText}) => {
        return myth.findOneAndUpdate(
            { _id: mythId},
            {$addToSet: { comments: {commentText}}
            },
            
            {new: true,
            runValidators: true,
            },
            );
    },
    removeComment: async (parent, {mythId, commentId}) => {
        return myth.findOneAndUpdate(
            { _id: mythId },
            { $pull: {comments: {_id: commentId} } },
            { new: true }
        );
    }
};

module.exports = resolvers;