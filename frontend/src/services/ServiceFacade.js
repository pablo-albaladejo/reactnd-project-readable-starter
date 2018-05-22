import APIService from './APIService';
import HelperService from './HelperService';

class ServiceFacade {

    /* 
        API 
    */

    /* Categories */
    static getAllCategories() {
        return APIService.getInstance().getAllCategories();
    }

    /* Posts */
    static getAllPosts(category) {
        return APIService.getInstance().getAllPosts(category);
    }
    static getPostById(postId){
        return APIService.getInstance().getPostById(postId);
    }
    static updatePostVoteScore(postId, upVote){
        return APIService.getInstance().updatePostVoteScore(postId,upVote);
    }
    static deletePost(postId){
        return APIService.getInstance().deletePost(postId);
    }

    /* Comments */
    static getAllComments(postId) {
        return APIService.getInstance().getAllComments(postId);
    }
    static updateCommentVoteScore(commentId, upVote){
        return APIService.getInstance().updateCommentVoteScore(commentId,upVote);
    }
    static deleteComment(commentId){
        return APIService.getInstance().deleteComment(commentId);
    }

    /* Helper */
    static removeByKey(myObj, deleteKey){
        return HelperService.getInstance().removeByKey(myObj, deleteKey);
    }
    static isDevEnv() {
        return HelperService.getInstance().isDevEnv();
    }

    
}
export default ServiceFacade;