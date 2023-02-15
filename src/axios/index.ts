const axiosdata = (username: string, page: number) =>
  JSON.stringify({
    query: `query user($username:String!, $page: Int) {
   user(username: $username) {
    name
  	photo
    numPosts
    publicationDomain
    username
    
    publication{
      posts(page: $page){
        type
        coverImage
        slug
        title
        brief
        contentMarkdown
        
      }
    }
   
  }
}`,
    variables: {
      username: username,
      page: page,
    },
  });

var config = (username: string, page: number) => ({
  method: "post",
  url: "https://api.hashnode.com/",
  headers: {
    Authorization: "80458ae0-c222-4f7d-80f1-cb1da6e1f678",
    "Content-Type": "application/json",
  },
  data: axiosdata(username, page),
});

export { config };
