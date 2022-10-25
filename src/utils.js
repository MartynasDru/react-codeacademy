export const filterPosts = (post, inputValue) => {
    return post.title.indexOf(inputValue) >= 0
}